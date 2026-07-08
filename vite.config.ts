import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { createChatReply } from './api/claude-chat.js'

type ChatBody = {
  messages?: unknown
}

function claudeChatDevPlugin(env: Record<string, string>): Plugin {
  return {
    name: 'claude-chat-dev-api',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (request, response) => {
        response.setHeader('cache-control', 'no-store')
        response.setHeader('x-content-type-options', 'nosniff')

        if (request.method !== 'POST') {
          response.statusCode = 405
          response.setHeader('content-type', 'application/json')
          response.end(JSON.stringify({ error: 'Method not allowed.' }))
          return
        }

        let raw = ''
        request.on('data', (chunk) => {
          raw += chunk
          if (raw.length > 12_000) request.destroy()
        })

        request.on('end', async () => {
          try {
            const body = (raw ? JSON.parse(raw) : {}) as ChatBody
            const result = await createChatReply({
              messages: body.messages,
              apiKey: env.CLAUDE_API_KEY,
              model: env.CLAUDE_MODEL,
            })

            response.statusCode = result.status
            response.setHeader('content-type', 'application/json')
            response.end(JSON.stringify(result.body))
          } catch {
            response.statusCode = 500
            response.setHeader('content-type', 'application/json')
            response.end(JSON.stringify({ error: 'Unable to process chat request.' }))
          }
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [claudeChatDevPlugin(env), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'es2020',
      sourcemap: false,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes('node_modules')) return
            if (id.includes('react-router')) return 'router'
            if (id.includes('react-icons')) return 'icons'
            if (id.includes('i18next')) return 'i18n'
            if (id.includes('/react/') || id.includes('/react-dom/') || id.includes('scheduler')) return 'react'
          },
        },
      },
    },
  }
})
