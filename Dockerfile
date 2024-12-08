FROM node:lts-bookworm-slim

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY ./dist .

EXPOSE 3000
CMD [ "node", "src/server.js" ]