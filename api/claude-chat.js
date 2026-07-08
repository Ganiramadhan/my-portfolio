const SITE_CONTEXT = `
You are the portfolio assistant for Gani Ramadhan.
Your job is not only to answer questions. You should guide visitors toward useful portfolio decisions: understand fit, compare projects, evaluate strengths, and know how to contact Gani.
Facts:
- Gani Ramadhan is a full-stack engineer based in Bandung, Indonesia.
- Core stack includes TypeScript, React, Next.js, NestJS, Go, Laravel, PostgreSQL, Cassandra, Redis, RabbitMQ, Docker, Kubernetes, Jenkins, Grafana.
- Selected work includes SAKU Finance, Mekarjaya Village Profile Website, BPD Abujapi HRMIS, Abujapi CMS, BPD Abujapi profile website, and Batik Merawit.
- Experience includes POSDIGI, Drizy Studio, Neuronworks Indonesia, and freelance full-stack work.
- POSDIGI work includes internal systems, eContract B2B, Docker/Jenkins CI/CD, Go, PostgreSQL, Redis, RabbitMQ, and observability.
- SAKU Finance is an AI personal finance product with AI chat, OCR/receipt scanning, Google OAuth, Turnstile, analytics, observability, Redis, RabbitMQ, Docker, Kubernetes, Grafana, Loki, and Promtail.
- Contact email: ganiramadhan35@gmail.com.
Rules:
- Do not invent private client details.
- Match the user's language when possible.
- Do not use markdown formatting. Avoid asterisks, bold markers, headings, tables, code fences, or raw markdown symbols.
- Do not use emojis unless the user uses them first.
- Keep most answers within 3 to 6 short lines.
- If the user asks a vague question, ask one clarifying question and offer 2 example directions.
- If the user asks a broad question, give a direct answer first, then suggest 2 useful follow-up topics.
- If asked about hiring or collaboration, summarize relevant strengths and suggest contacting Gani by email.
- Prefer concrete, portfolio-specific answers over generic praise.
`

const MAX_MESSAGE_LENGTH = 900
const MAX_MESSAGES = 8
const REQUEST_TIMEOUT_MS = 14000

function normalizeMessages(messages) {
  if (!Array.isArray(messages)) return []

  return messages
    .filter((message) => message && (message.role === 'user' || message.role === 'assistant'))
    .slice(-MAX_MESSAGES)
    .map((message) => ({
      role: message.role,
      content: String(message.content || '').replace(/\s+/g, ' ').trim().slice(0, MAX_MESSAGE_LENGTH),
    }))
    .filter((message) => message.content.trim().length > 0)
}

function extractText(data) {
  if (!Array.isArray(data?.content)) return ''

  return data.content
    .filter((part) => part?.type === 'text')
    .map((part) => part.text)
    .join('\n')
    .trim()
}

function cleanReply(text) {
  return text
    .replace(/\*\*/g, '')
    .replace(/__/g, '')
    .replace(/`/g, '')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^\s*[-*]\s+/gm, '• ')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function detectLanguage(text) {
  if (/[ぁ-んァ-ン一-龯]/.test(text)) return 'ja'
  if (/\b(siapa|apa|kelebihan|kontak|proyek|pengalaman|stack|cocok|hubungi)\b/i.test(text)) return 'id'
  return 'en'
}

function buildSuggestions(lastMessage) {
  const language = detectLanguage(lastMessage)
  const lower = lastMessage.toLowerCase()

  if (language === 'id') {
    if (lower.includes('project') || lower.includes('proyek')) return ['Bandingkan SAKU dan HRMIS', 'Project mana yang paling kompleks?', 'Apa hasil bisnisnya?']
    if (lower.includes('stack') || lower.includes('teknologi')) return ['Kenapa pakai Go dan Redis?', 'Apa pengalaman DevOps-nya?', 'Stack backend terkuat apa?']
    if (lower.includes('kontak') || lower.includes('hire') || lower.includes('rekrut')) return ['Cocok untuk role apa?', 'Tulis ringkasan hiring', 'Apa availability-nya?']
    return ['Project paling kuat apa?', 'Apa kelebihan Gani?', 'Cocok untuk role apa?']
  }

  if (language === 'ja') {
    return ['強い制作実績は？', '技術スタックを詳しく', '採用向きの強みは？']
  }

  if (lower.includes('project')) return ['Compare SAKU and HRMIS', 'Which project is most complex?', 'What business outcomes?']
  if (lower.includes('stack') || lower.includes('technology')) return ['Why Go and Redis?', 'DevOps experience?', 'Strongest backend stack?']
  if (lower.includes('contact') || lower.includes('hire')) return ['Best role fit?', 'Write a hiring summary', 'How to contact Gani?']
  return ['Which projects are strongest?', "What are Gani's strengths?", 'Is Gani a good fit?']
}

export async function createChatReply({ messages, apiKey, model }) {
  const normalizedMessages = normalizeMessages(messages)
  const lastMessage = normalizedMessages.at(-1)?.content || ''

  if (!apiKey) {
    return {
      status: 500,
      body: { error: 'Claude API key is not configured.' },
    }
  }

  if (!model) {
    return {
      status: 500,
      body: { error: 'Claude model is not configured.' },
    }
  }

  if (normalizedMessages.length === 0 || normalizedMessages.at(-1)?.role !== 'user') {
    return {
      status: 400,
      body: { error: 'Please send a valid user message.' },
    }
  }

  if (lastMessage.length > MAX_MESSAGE_LENGTH) {
    return {
      status: 400,
      body: { error: 'Please keep the message shorter.' },
    }
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
  let anthropicResponse

  try {
    anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model,
        max_tokens: 430,
        temperature: 0.25,
        system: SITE_CONTEXT,
        messages: normalizedMessages,
      }),
    })
  } catch {
    return {
      status: 504,
      body: { error: 'The assistant took too long to respond.' },
    }
  } finally {
    clearTimeout(timeout)
  }

  const data = await anthropicResponse.json().catch(() => ({}))

  if (!anthropicResponse.ok) {
    return {
      status: anthropicResponse.status,
      body: {
        error: data?.error?.message || 'Claude request failed.',
      },
    }
  }

  const reply = cleanReply(extractText(data))

  return {
    status: 200,
    body: {
      reply: reply || 'I could not generate a response right now.',
      suggestions: buildSuggestions(lastMessage),
    },
  }
}
