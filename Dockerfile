FROM node:alpine3.11
WORKDIR /usr/code
COPY package*.json /usr/code/
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]

