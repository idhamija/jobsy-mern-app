# syntax=docker/dockerfile:1

FROM node:18-alpine
ENV NODE_ENV=production

WORKDIR /app

RUN npm install -g npm@9.8.1

COPY package*.json ./
COPY client/package*.json ./client/

RUN npm run install-dependencies:prod

COPY client/ ./client/

RUN npm run build-client

COPY . .

EXPOSE 5000

ENTRYPOINT ["node", "server.js"]
