# Stage 1 - clone the repo
FROM debian:stretch
RUN apt-get update
RUN apt-get install -y wget unzip
#RUN git clone "https://github.com/phil-hudson/airsonic-react.git" --depth 1
RUN wget --no-check-certificate -O master.zip 'https://github.com/phil-hudson/airsonic-react/archive/master.zip'
RUN unzip master.zip
RUN cd airsonic-react-master

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