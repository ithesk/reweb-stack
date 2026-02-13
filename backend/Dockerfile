FROM node:18-alpine

# Install system dependencies for native modules
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev

WORKDIR /srv/app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies (no frozen-lockfile for cross-platform compatibility)
RUN yarn install --network-timeout 600000

# Copy project files
COPY . .

# Build admin panel
RUN NODE_ENV=production yarn build

# Expose Strapi port
EXPOSE 1337

CMD ["yarn", "start"]
