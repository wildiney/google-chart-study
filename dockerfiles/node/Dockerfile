FROM node:lts-alpine

WORKDIR /app

COPY ./package*.json .

RUN npm install
RUN npm install -g gulp
RUN npm install gulp

COPY . .

EXPOSE 3000

CMD ["gulp"]