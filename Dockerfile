FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY next.config.js .
COPY next-env.d.ts .

COPY src ./src 
COPY public ./public
COPY tsconfig.json .

CMD [ "npm", "run", "dev"]