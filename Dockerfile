FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./
COPY bin .
COPY lib .
COPY configs .
COPY test .

RUN npm install --verbose

CMD ["npm", "run", "production"]
