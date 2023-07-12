FROM node:lts-slim

ENV NODE_ENV=production
WORKDIR /usr/src/app

RUN apt update
RUN DEBIAN_FRONTEND=noninteractive apt install wget -y

# Copy package.json and package-lock.json separately to fully utilize Docker layer caching
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --production --silent && npm cache clean --force

# Opt out of Next.js telemetry
RUN npx next telemetry disable

# Copy the rest of the files
COPY . .

# Remove development dependencies
RUN npm prune --production

# Environment Variables
ENV NODE_ENV=production

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["bash", "start.sh"]