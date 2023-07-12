# Use a smaller base image
FROM node:lts-slim

ENV NODE_ENV=production
WORKDIR /usr/src/app

# Copy package.json and package-lock.json separately to fully utilize Docker layer caching
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --production --silent && npm cache clean --force

# Copy only necessary files for production
COPY .next ./.next
COPY public ./public
COPY config.json ./
COPY next.config.js ./

# Opt out of Next.js telemetry
RUN npx next telemetry disable

# Expose port 3000
EXPOSE 3000

# Set permissions and user
RUN chown -R node /usr/src/app
USER node

# Start the app
CMD ["npm", "start"]