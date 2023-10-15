FROM fascinated/docker-images:node-pnpm-latest

ENV NODE_ENV=production
WORKDIR /usr/src/app

# Copy package.json and package-lock.json separately to fully utilize Docker layer caching
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install --production --silent

# Opt out of Next.js telemetry
RUN npx next telemetry disable

# Copy the rest of the files
COPY . .

# Environment Variables
ENV NODE_ENV=production

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["bash", "start.sh"]