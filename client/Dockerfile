FROM node:bullseye-slim

RUN npm i -g pnpm

WORKDIR /app

COPY package.json ./

RUN pnpm install

COPY . .
