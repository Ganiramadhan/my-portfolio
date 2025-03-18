# Gunakan image Node.js
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file project
COPY . .

# Set environment variable
ENV NODE_ENV=production

# Build Next.js
RUN npm run build

# Expose port
EXPOSE 3001

# Jalankan aplikasi
CMD ["npm", "run", "start"]
