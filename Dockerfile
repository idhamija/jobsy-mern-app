FROM node:16-alpine
ENV NODE_ENV=production

WORKDIR /app

RUN npm install -g npm@9.8.1

COPY package.json ./
RUN npm run install-server:prod

COPY client/package.json ./client/
RUN npm run install-client:prod

COPY client/ ./client/
RUN npm run build-client

COPY . ./

EXPOSE 5000

ENTRYPOINT ["npm", "start"]
