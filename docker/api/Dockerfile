FROM ubuntu:16.04

MAINTAINER Gabriel Maximowicz "gabriel.maximowicz@gmail.com"

RUN mkdir /server
WORKDIR /server

#copy sails files
COPY .sailsrc /server
COPY app.js /server
COPY Gruntfile.js /server

#update for install npm and node
RUN apt-get -qq update
RUN apt-get install -yq curl git nano

RUN apt-get install -y nodejs
RUN apt-get install nodejs-legacy -y
RUN apt-get install -y npm
RUN npm install -g npm

RUN npm install -g sails@0.12.13 grunt-cli bower pm2 npm-check-updates

#angular dependencies
RUN npm install -g typescript typings

COPY package.json /server
COPY tsconfig.json /server
COPY typings.json /server

RUN npm install
RUN typings install

EXPOSE 1337

CMD ["sails","lift"]
