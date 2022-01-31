FROM node:17-alpine3.14
EXPOSE 3000
WORKDIR /frontend/app
COPY package*.json ./
COPY . .
RUN npm install
CMD [ "npm", "start" ]