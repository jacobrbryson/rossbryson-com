# Stage 1: Build the Angular application
FROM node:20-slim as builder
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --force

# Copy the rest of the application source code
COPY . .

# Build the application. This single command handles the browser,
# server, and prerendering steps, creating a standalone output.
RUN npm run build

# Stage 2: Create the final, lean production image
FROM node:20-slim as final

# Set the working directory
WORKDIR /app

# Set the port Cloud Run or other services will use
ENV PORT=8080

# Copy the standalone output from the builder stage.
# The 'ng build' command puts everything needed to run the app here.
# You don't need node_modules in the final stage anymore.
COPY --from=builder /app/dist/rossbryson-com/ ./

# The command to run the server. The entry point is now in the root
# of the copied directory.
CMD [ "node", "server/server.mjs" ]