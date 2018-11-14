FROM node:latest

WORKDIR /source

COPY . /source

EXPOSE 4000

#RUN npm run lint

RUN npm run build

ENTRYPOINT ["npm", "start"]
