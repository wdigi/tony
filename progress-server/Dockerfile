FROM node:22-alpine
WORKDIR /app
COPY server.js .
USER node
ENV DATA_FILE=/data/progress.json
EXPOSE 8080
CMD ["node", "server.js"]
