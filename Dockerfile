FROM node:16.18.0

COPY . /app

WORKDIR /app

EXPOSE 3000

RUN yarn install
RUN yarn build

CMD ["yarn","serve"]
