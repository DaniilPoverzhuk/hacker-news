FROM node as builder
WORKDIR /hacker-news
COPY . .
RUN yarn install
RUN yarn build

FROM nginx
COPY --from=builder /hacker-news/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /hacker-news/dist /usr/share/nginx/html