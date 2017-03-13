FROM node:7

RUN mkdir -p /opt/hot-board/imagery/images
RUN mkdir -p /opt/hot-board/imagery/orthophoto

COPY . /opt/hot-board
WORKDIR /opt/hot-board

RUN npm install

EXPOSE 3000
CMD npm start
