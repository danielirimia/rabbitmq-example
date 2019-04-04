FROM node:10

RUN mkdir /app
WORKDIR /app

# Set env variables
ENV PORT 8074
ENV NODE_ENV "development"

# Install app dependencies
COPY package.json /app/
COPY . /app/
RUN cd /app && npm install && npm install -g nodemon
EXPOSE 80
