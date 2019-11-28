# # base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR ./

# add `/app/node_modules/.bin` to $PATH
ENV PATH ./node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json ./package.json
RUN yarn install
RUN npm install react-scripts@3.2.0 -g

# start app
CMD ["yarn", "start"]

# FROM mhart/alpine-node:11 AS builder
# WORKDIR /app
# COPY . .
# RUN npm start

# FROM mhart/alpine-node
# RUN npm start
# WORKDIR /app
# COPY --from=builder /app/build .
# CMD ["npm", "-p", "80", "-s", "."]