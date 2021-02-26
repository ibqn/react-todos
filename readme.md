# Getting Started

This project was created by running

```shell
npx create-react-app react-todos
```

# Build docker image without `docker-compose`

```shell
docker build -t react-app .
```

Serve our app on port 3000.

```shell
docker run --rm -it -p 3000:80 react-app
```
