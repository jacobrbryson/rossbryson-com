FROM node:20-slim as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:ssr --output-path=dist

FROM node:20-slim

WORKDIR /app

COPY --from=builder /app/dist/rossbryson-com /app/dist

ENV PORT 8080 

CMD ["node", "dist/main.js"]
