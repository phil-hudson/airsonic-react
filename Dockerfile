# Stage 1 - clone the repo
FROM debian:stretch
RUN apt-get update
RUN apt-get install -y git
RUN git clone "https://github.com/phil-hudson/airsonic-react.git" --depth 1

# Stage 2 - the build process
FROM node:10.13 as build-deps
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 3 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps ./build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]