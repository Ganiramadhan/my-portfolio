# Portfolio

Personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and a small Node runtime server for static delivery plus the `/api/chat` endpoint.

## Features

- Responsive portfolio pages
- Multi-language content
- SEO metadata and public assets
- Floating AI chatbot backed by server-side Claude API calls
- Docker-ready runtime server

## Requirements

- Node.js 22+
- pnpm

## Environment

Create a local environment file from the example:

```bash
cp .env.example .env
```

Runtime variables:

```bash
CLAUDE_API_KEY=your_claude_api_key_here
CLAUDE_MODEL=claude-sonnet-4-5
PORT=3302
HOST=0.0.0.0
```

Do not commit real `.env` files.

The Claude variables are only used by the Node runtime server. Do not expose them with a `VITE_` prefix.

## Development

```bash
pnpm install
pnpm dev
```

## Quality Checks

```bash
pnpm lint
pnpm build
```

## Production Runtime

The production image runs `server.js`, serving the built Vite app and `/api/chat`.

```bash
docker build -t my-portfolio:latest .
docker run -d \
  --name my-portfolio \
  --restart unless-stopped \
  --env-file .env \
  --network ganipedia \
  --network-alias my-portfolio \
  --expose 3302 \
  my-portfolio:latest
```

When running behind a reverse proxy, attach the container to the proxy's Docker network and route traffic to `http://my-portfolio:3302`. Host port publishing is not required when the reverse proxy shares the same Docker network.

## CI/CD

This repository includes a Jenkins pipeline template for building, pushing, and deploying the Docker image. Production hosts, registry details, SSH access, and Claude credentials should be configured in Jenkins credentials, not committed to the repository.

Expected Jenkins credentials:

- `docker-registry-host` as secret text, for example `registry.example.com` without protocol
- `docker-registry-username` as secret text
- `docker-registry-credentials` as secret text for the registry password or access token
- `ganipedia-host-ssh-server` as secret text
- `ganipedia-host-ssh-port` as secret text
- `ganipedia-host-ssh-user` as secret text
- `ganipedia-host-ssh-password` as secret text
- `ganipedia-claude-api-key` as secret text
- `ganipedia-claude-model` as secret text

## Project Structure

```text
api/              Server-side chatbot handlers
public/           Static assets
src/              React application source
server.js         Production Node runtime
Dockerfile        Production image
Jenkinsfile       CI/CD pipeline template
```
