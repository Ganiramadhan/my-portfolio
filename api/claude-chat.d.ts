export function createChatReply(input: {
  messages: unknown
  apiKey?: string
  model?: string
}): Promise<{
  status: number
  body: {
    reply?: string
    error?: string
    suggestions?: string[]
  }
}>
