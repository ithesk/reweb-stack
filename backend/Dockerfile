FROM node:18-alpine

# Install system dependencies for native modules
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev

WORKDIR /srv/app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile --production=false

# Copy project files
COPY . .

# Build admin panel
RUN yarn build

# Expose Strapi port
EXPOSE 1337

# Start Strapi
CMD ["yarn", "start"]
