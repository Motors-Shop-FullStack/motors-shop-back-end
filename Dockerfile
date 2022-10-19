FROM node:16-alpine

RUN apk update

WORKDIR /app

COPY prisma ./prisma/

COPY .env ./

COPY tsconfig.json ./

COPY package*.json ./

COPY . .

RUN yarn

RUN yarn prisma generate

CMD ["yarn", "dev"]