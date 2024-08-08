FROM node:lts-alpine as PRODUCTION_IMAGE
ENV NODE_ENV=production
WORKDIR /app/react-app
COPY ["package.json", "package-lock.json", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent
RUN npm i -g serve
COPY . .
RUN npm run build
EXPOSE 3000

CMD [ "serve", "-s", "dist" ]
