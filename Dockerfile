FROM node:7.8.0

ADD . /react-app
VOLUME /react-app
WORKDIR /react-app

RUN npm install

SHELL ["/bin/bash"]
CMD ["npm", "run", "serve", "--", "--port", "80"]
