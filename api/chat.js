import { createChatReply } from './claude-chat.js'

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 12
const requestBuckets = new Map()

function getClientKey(request) {
  return String(
    request.headers['x-forwarded-for'] ||
    request.headers['x-real-ip'] ||
    request.socket?.remoteAddress ||
    'anonymous',
  ).split(',')[0].trim()
}

function isRateLimited(request) {
  const now = Date.now()
  const key = getClientKey(request)
  const bucket = requestBuckets.get(key)

  if (!bucket || now > bucket.resetAt) {
    requestBuckets.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  bucket.count += 1
  return bucket.count > RATE_LIMIT_MAX
}

async function readJson(request) {
  if (request.body) {
    return typeof request.body === 'string' ? JSON.parse(request.body) : request.body
  }

  let raw = ''
  for await (const chunk of request) {
    raw += chunk
  }

  return raw ? JSON.parse(raw) : {}
}

export default async function handler(request, response) {
  response.setHeader('content-type', 'application/json')
  response.setHeader('cache-control', 'no-store')
  response.setHeader('x-content-type-options', 'nosniff')

  if (request.method !== 'POST') {
    response.statusCode = 405
    response.end(JSON.stringify({ error: 'Method not allowed.' }))
    return
  }

  if (isRateLimited(request)) {
    response.statusCode = 429
    response.end(JSON.stringify({ error: 'Too many chat requests. Please wait a moment.' }))
    return
  }

  try {
    const body = await readJson(request)
    const result = await createChatReply({
      messages: body.messages,
      apiKey: process.env.CLAUDE_API_KEY,
      model: process.env.CLAUDE_MODEL,
    })

    response.statusCode = result.status
    response.end(JSON.stringify(result.body))
  } catch {
    response.statusCode = 500
    response.end(JSON.stringify({ error: 'Unable to process chat request.' }))
  }
}
