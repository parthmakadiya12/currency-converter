FROM node:alpine
WORKDIR /usr/src/app
RUN apk add g++ make python
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build
RUN rm ./api/public/index.html
RUN cp -a ./build/. ./api/public/
WORKDIR /usr/src/app/api
RUN yarn
EXPOSE 8000
CMD ["yarn","dev"]