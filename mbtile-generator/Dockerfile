FROM node:7

RUN mkdir -p /opt/mambo/imagery/images
RUN mkdir -p /opt/mambo/imagery/orthophoto

COPY . /opt/mambo
WORKDIR /opt/mambo

RUN npm install

EXPOSE 3000
CMD npm start
