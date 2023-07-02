FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["config.json", "package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000

# Opt out of NextJS telemetry
RUN npx next telemetry disable

# Build the app
RUN npm run build

# Setup permissions
RUN chown -R node /usr/src/app
USER node

CMD ["npm", "start"]
