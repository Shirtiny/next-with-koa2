# sudo docker build -t nextkoa .

FROM node:16-buster-slim

WORKDIR /web/next-koa

COPY package.json ./

RUN yarn

COPY . .

RUN ls -la

ENTRYPOINT [ "yarn" ]

CMD [ "server" ]

