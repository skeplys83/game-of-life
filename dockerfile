FROM node:24.2.0-alpine3.22
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm install -g serve
ENTRYPOINT []
CMD ["serve", "-s", "dist", "-l", "5173"]
EXPOSE 5173