FROM node:8.9.3
ADD tmp.tgz /
RUN npm i
RUN npm run build
EXPOSE 3000
ENTRYPOINT ["npm", "run", "start"]
