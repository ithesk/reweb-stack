FROM node:18-bookworm-slim

# Install system dependencies for native modules (sharp, vips)
RUN apt-get update && apt-get install -y \
    build-essential \
    libvips-dev \
    python3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /srv/app

# Copy only package.json (ignore yarn.lock for cross-platform builds)
COPY package.json ./

# Install dependencies with npm
RUN npm install --legacy-peer-deps

# Copy project files
COPY . .

# Build admin panel
RUN NODE_ENV=production npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]
