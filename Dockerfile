# syntax=docker/dockerfile:1.7

# ---------- 1. Dependencies ----------
FROM node:22-alpine AS deps

ENV PNPM_HOME=/pnpm \
    PATH=/pnpm:$PATH \
    COREPACK_ENABLE_DOWNLOAD_PROMPT=0 \
    CI=true

RUN corepack enable && corepack prepare pnpm@11.5.1 --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile --prefer-offline

# ---------- 2. Build ----------
FROM node:22-alpine AS builder

ENV PNPM_HOME=/pnpm \
    PATH=/pnpm:$PATH \
    COREPACK_ENABLE_DOWNLOAD_PROMPT=0 \
    NODE_ENV=production

RUN corepack enable && corepack prepare pnpm@11.5.1 --activate

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build && \
    rm -rf node_modules src .vite

# ---------- 3. Runtime ----------
FROM node:22-alpine AS runner

WORKDIR /app

RUN apk add --no-cache tini wget && \
    addgroup -S portfolio && \
    adduser -S -G portfolio portfolio

ARG PORT=3302
ENV PORT=${PORT}

ARG HOST=0.0.0.0
ENV HOST=${HOST}

ENV NODE_ENV=production

COPY --from=builder --chown=portfolio:portfolio /app/dist ./dist
COPY --chown=portfolio:portfolio api ./api
COPY --chown=portfolio:portfolio server.js ./server.js

USER portfolio

EXPOSE 3302

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -qO- http://127.0.0.1:${PORT}/healthz >/dev/null 2>&1 || exit 1

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "server.js"]
