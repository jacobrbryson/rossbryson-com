# Stage 1: Build the Angular application
FROM node:20-slim as builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
# This step is done separately to leverage Docker's layer caching
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code
# This includes your Angular components, assets, and the server.ts file
COPY . .

# Build the Angular application for production with Server-Side Rendering (SSR)
# The 'npm run build:ssr' command typically handles both browser and server builds,
# placing them in 'dist/<project-name>/browser' and 'dist/<project-name>/server'
# respectively, and compiling the server.ts into 'main.js' within the server folder.
# Ensure 'rossbryson-com' matches your actual Angular project name in angular.json
RUN npm run build:ssr --output-path=dist/rossbryson-com

# Stage 2: Create the final production image
FROM node:20-slim

# Set the working directory for the final application
WORKDIR /app

# Copy only the necessary build artifacts from the builder stage.
# We copy the entire 'rossbryson-com' directory which contains
# both 'browser' (client-side) and 'server' (server-side) bundles.
# The path in the builder stage is '/app/dist/rossbryson-com'
# The destination in the final stage is '/app/dist/rossbryson-com'
COPY --from=builder /app/dist/rossbryson-com /app/dist/rossbryson-com

# Set the port that Cloud Run expects for incoming requests
ENV PORT 8080

# Command to run the Angular Universal server.
# The 'main.js' file within the 'server' folder of your project's dist output
# is typically the entry point for the Node.js Express server that serves your SSR app.
# Ensure this path is correct based on your Angular Universal setup.
CMD ["node", "dist/rossbryson-com/server/main.js"]
