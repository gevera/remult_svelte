# Multi-stage build for SvelteKit application
FROM node:20.18.1-alpine AS base

# Install pnpm
RUN npm install -g pnpm@10.14.0

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml .npmrc ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build stage
FROM base AS build

# Build the application
RUN pnpm run build

# Production stage
FROM node:20.18.1-alpine AS production

# Install pnpm
RUN npm install -g pnpm@10.14.0

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml .npmrc ./

# Install only production dependencies
RUN pnpm install --frozen-lockfile --prod

# Copy built application from build stage
COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./

# Set environment variable to use Node adapter
ENV IS_NODE=true

# Create a non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S svelte -u 1001

# Change ownership of the app directory
RUN chown -R svelte:nodejs /app
USER svelte

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })" || exit 1

# Start the application
CMD ["node", "build"]
