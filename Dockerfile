# Gunakan image Node.js sebagai base image
FROM node:18-alpine AS deps

# Set working directory
WORKDIR /app

# Salin dependency files terlebih dahulu
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin seluruh source code
COPY . .

# Set production environment
ENV NODE_ENV=production

# Build Next.js app
RUN npm run build

# Expose port sesuai yang dipakai Next.js
EXPOSE 3009

# Jalankan aplikasi Next.js
CMD ["npm", "run", "start"]
