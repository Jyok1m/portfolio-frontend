FROM node:22-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build:vercel

FROM node:22-alpine

RUN npm install -g serve

COPY --from=build /app/dist /app

EXPOSE 3000

CMD ["serve", "-s", "/app", "-l", "3000"]
