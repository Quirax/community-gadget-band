FROM node:20.11.0-alpine3.19

# Korean Fonts
RUN apk --update add fontconfig
RUN mkdir -p /usr/share/fonts/nanumfont
RUN wget http://cdn.naver.com/naver/NanumFont/fontfiles/NanumFont_TTF_ALL.zip
RUN unzip NanumFont_TTF_ALL.zip -d /usr/share/fonts/nanumfont
RUN fc-cache -f && rm -rf /var/cache/*

# bash install
RUN apk add bash

# git install
RUN apk add git
RUN git config --global --add safe.directory /app

# Language
ENV LANG=ko_KR.UTF-8 \
    LANGUAGE=ko_KR.UTF-8

# Set the timezone in docker
RUN apk --no-cache add tzdata && \
        cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime && \
        echo "Asia/Seoul" > /etc/timezone

# Create Directory for the Container
WORKDIR /app

# Only copy the package.json file to work directory
COPY package.json ./
COPY backend/package.json ./backend/
COPY frontend/package.json ./frontend/
RUN npm i -s
RUN npm i --save-dev
RUN npm i -g nodemon
# RUN cd backend
# RUN npm i -s
# RUN npm i --save-dev
# RUN cd ../frontend
# RUN npm i -s
# RUN npm i --save-dev
# RUN cd ..

# Docker Demon Port Mapping
EXPOSE 3000
EXPOSE 5000

# Node ENV
ENV NODE_ENV=production
