FROM node:24.2.0-alpine3.22
WORKDIR /app
COPY . .
RUN npm i
CMD ["npm", "run", "dev"]
EXPOSE 5173