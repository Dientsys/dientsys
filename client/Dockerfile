FROM node:bullseye-slim

RUN npm i -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

RUN pnpm add -D esbuild@0.18.20

COPY . .

# --platform=@esbuild/linux-arm64