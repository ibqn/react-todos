FROM node:14-alpine AS builder

WORKDIR /app

COPY . .
RUN yarn install && yarn build


FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
