FROM node:7.8.0

ADD . /react-app
VOLUME /react-app
WORKDIR /react-app

RUN npm install

SHELL ["/bin/bash"]
CMD ["node_modules/.bin/serve", "--port", "80"]
