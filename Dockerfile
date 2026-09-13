
# Stage 1: Build the React application
FROM node:24-alpine AS builder

WORKDIR /app

# Install dependencies first for better layer caching#
COPY package*.json ./
RUN npm ci

# Copy application source
COPY . .

# Build the React application
RUN npm run build


# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy our Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the React production build
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
