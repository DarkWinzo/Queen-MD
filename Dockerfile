FROM node:lts-buster

WORKDIR /root/AlienAlfa/

COPY ./ /root/AlienAlfa/

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
rm -rf /var/lib/apt/lists/*

RUN npm install -g npm@8.11.0

RUN npm i cfonts

RUN npm i chalk

COPY . .


CMD ["node", "."]
