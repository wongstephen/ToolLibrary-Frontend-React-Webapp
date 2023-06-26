FROM node:19
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]

# docker build -t toollib-fe .

# docker run -p 3000:3000 -d --name toollib-fe -v $(pwd):/app --read-only -v /app/node_modules 26e0b7efba9f

# docker exec -it 6a52d9a5becf bash