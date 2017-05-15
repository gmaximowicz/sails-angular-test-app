FROM node:6.9

RUN mkdir /server
WORKDIR /server

#copy angular files
COPY docker/compiler/package.json /server
COPY typings.json /server
COPY tsconfig.json /server

RUN npm install -g typescript typings
RUN npm install
RUN typings install

VOLUME ["/server"]

CMD ["npm", "run", "tsc"]
