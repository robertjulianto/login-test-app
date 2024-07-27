FROM oven/bun:1.1.20-alpine

WORKDIR /usr/src/app

COPY ./dist ./dist

COPY package.json .

RUN bun install

CMD ["bun","run", "preview", "--host"]