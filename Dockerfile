FROM node:8.11-alpine

WORKDIR /usr/src/app
ENV PORT 8888

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app
RUN yarn install

ADD public ./public
ADD src ./src

RUN yarn build

COPY api ./api
COPY server.js ./

CMD ["node", "server.js"]
