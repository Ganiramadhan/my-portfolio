import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createChatReply } from './api/claude-chat.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, 'dist')
const port = Number(process.env.PORT || 3302)
const host = process.env.HOST || '0.0.0.0'

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
}

const securityHeaders = {
  'x-frame-options': 'SAMEORIGIN',
  'x-content-type-options': 'nosniff',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'permissions-policy': 'camera=(), microphone=(), geolocation=()',
}

function loadLocalEnv() {
  const envPath = path.join(__dirname, '.env')
  if (!existsSync(envPath)) return

  const rows = readFileSync(envPath, 'utf8').split(/\r?\n/)
  for (const row of rows) {
    const line = row.trim()
    if (!line || line.startsWith('#') || !line.includes('=')) continue
    const [key, ...valueParts] = line.split('=')
    if (!process.env[key]) {
      process.env[key] = valueParts.join('=').replace(/^["']|["']$/g, '')
    }
  }
}

function sendJson(response, status, body) {
  response.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    ...securityHeaders,
  })
  response.end(JSON.stringify(body))
}

async function readJson(request) {
  let raw = ''
  for await (const chunk of request) {
    raw += chunk
    if (raw.length > 12_000) throw new Error('Payload too large')
  }
  return raw ? JSON.parse(raw) : {}
}

async function handleChat(request, response) {
  if (request.method !== 'POST') {
    sendJson(response, 405, { error: 'Method not allowed.' })
    return
  }

  try {
    const body = await readJson(request)
    const result = await createChatReply({
      messages: body.messages,
      apiKey: process.env.CLAUDE_API_KEY,
      model: process.env.CLAUDE_MODEL,
    })
    sendJson(response, result.status, result.body)
  } catch {
    sendJson(response, 500, { error: 'Unable to process chat request.' })
  }
}

async function serveStatic(request, response) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { 'content-type': 'text/plain; charset=utf-8', ...securityHeaders })
    response.end('Method not allowed\n')
    return
  }

  const url = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`)
  const pathname = decodeURIComponent(url.pathname)

  if (pathname === '/healthz') {
    response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store', ...securityHeaders })
    response.end(request.method === 'HEAD' ? undefined : 'ok\n')
    return
  }

  const requestedPath = path.normalize(path.join(publicDir, pathname))
  const isInsidePublic = requestedPath === publicDir || requestedPath.startsWith(`${publicDir}${path.sep}`)
  let filePath = isInsidePublic ? requestedPath : path.join(publicDir, 'index.html')

  try {
    const fileStat = await stat(filePath)
    if (fileStat.isDirectory()) filePath = path.join(filePath, 'index.html')
  } catch {
    filePath = path.join(publicDir, 'index.html')
  }

  const ext = path.extname(filePath)
  const isAsset = filePath.includes(`${path.sep}assets${path.sep}`)
  const isStaticPublicFile = /\.(?:ico|svg|webmanifest|xml|txt|png|jpe?g|webp|woff2?)$/i.test(filePath)
  const body = await readFile(filePath)

  response.writeHead(200, {
    'content-type': mimeTypes[ext] || 'application/octet-stream',
    'cache-control': isAsset
      ? 'public, max-age=31536000, immutable'
      : isStaticPublicFile
        ? 'public, max-age=604800'
        : 'no-cache',
    ...securityHeaders,
  })
  if (request.method === 'HEAD') {
    response.end()
    return
  }
  response.end(body)
}

loadLocalEnv()

createServer(async (request, response) => {
  if (request.url?.startsWith('/api/chat')) {
    await handleChat(request, response)
    return
  }

  try {
    await serveStatic(request, response)
  } catch {
    response.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' })
    response.end('Internal server error\n')
  }
}).listen(port, host, () => {
  console.log(`Portfolio server listening on ${host}:${port}`)
})
