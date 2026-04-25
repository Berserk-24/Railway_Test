ENV DATABASE_URL= metro.proxy.rlwy.net
ENV PORT=49538

FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
RUN npm install pg
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
