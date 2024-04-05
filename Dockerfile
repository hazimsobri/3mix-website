# Use the official Node.js LTS version with Alpine as the base image
FROM node:16.20.0 as build

# Set the working directory for your Nuxt.js project
WORKDIR /app

# Copy package.json and package-lock.json (if available) into the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the project files into the working directory
COPY . .

# Build the Nuxt.js project for production
RUN npm run generate

# Use the official Nginx image as the base image for the second stage
FROM nginx:stable-alpine

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy the Nuxt.js build output from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom Nginx configuration file for the Nuxt.js app
COPY nginx.conf /etc/nginx/conf.d

# Expose the Nginx service port
EXPOSE 80

# Start Nginx in the foreground to keep the container running
CMD ["nginx", "-g", "daemon off;"]
