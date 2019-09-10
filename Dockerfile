FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN ls -l

RUN npm install --verbose

# Expose tomcat port
EXPOSE 8077

CMD ["npm", "run", "production"]


#docker run -it --rm -p 8077:8078 stmm_rt:v1