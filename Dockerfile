FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./
#COPY api-docs api-docs
COPY config config
COPY lib lib
COPY REST_Full REST_Full
COPY test test
COPY node_modules node_modules


# Expose tomcat port
EXPOSE 8077

CMD ["npm", "run", "production"]

#docker build --tag stmm_rt:v1 .
#docker image save -o C:\Users\salgan\Desktop\Docker_Images\stmm_rt_v1.tar stmm_rt:v1
#docker run -it --rm -p 8078:8077 stmm_rt:v1