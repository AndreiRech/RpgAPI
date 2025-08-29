FROM node:22-alpine AS builder

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM node:22-alpine

WORKDIR /usr/src/app
RUN addgroup -S nestjs && adduser -S nestjs -G nestjs
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/prisma ./prisma
RUN chown -R nestjs:nestjs /usr/src/app
USER nestjs
EXPOSE 3000
CMD [ "node", "dist/main.js" ]