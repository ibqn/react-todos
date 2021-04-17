# Getting Started

This project was created by running

```shell
npx create-react-app react-todos
```

# Build docker image without `docker-compose`

```shell
docker build -t react-todo .
```

Serve our app on port 3000.

```shell
docker run --rm -it -p 3000:80 react-todo
```

## Pull existing image from dockerhub

The current image can be downloaded directly from docker hub

```shell
docker run --rm -p 3000:80 --name react_app ibqn/react-todo
```
