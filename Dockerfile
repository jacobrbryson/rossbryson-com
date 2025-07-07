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
# This includes your Angular components, assets, server.ts,
# and crucially, angular.json which defines the project targets and their output paths.
COPY . .

# Build the Angular application for production with Server-Side Rendering (SSR).
# The 'npm run build:ssr' command (defined in package.json) already orchestrates
# the necessary Angular CLI commands (e.g., 'ng build', 'ng run <project>:server',
# and potentially 'ng run <project>:prerender').
#
# These individual Angular CLI commands have their specific output paths
# (like 'dist/rossbryson-com/browser' and 'dist/rossbryson-com/server')
# configured within your 'angular.json' file.
#
# By REMOVING '--output-path=dist/rossbryson-com' from this line, we allow
# Angular CLI to use its internally defined output paths, preventing conflicts
# that cause the "Project target does not exist" error after successful builds.
RUN npm run build:ssr

# Stage 2: Create the final production image
FROM node:20-slim

# Set the working directory for the final application
WORKDIR /app

# Copy only the necessary build artifacts from the builder stage.
# We copy the entire 'rossbryson-com' directory, which contains
# both the 'browser' (client-side) and 'server' (server-side) bundles,
# as well as the prerendered HTML files.
# The path in the builder stage is '/app/dist/rossbryson-com' (as defined implicitly by angular.json)
# The destination in the final stage is '/app/dist/rossbryson-com'
COPY --from=builder /app/dist/rossbryson-com /app/dist/rossbryson-com

# Set the port that Cloud Run expects for incoming requests
ENV PORT 8080

# Command to run the Angular Universal server.
# IMPORTANT: Changed 'main.js' to 'server.mjs' based on your observation.
# The 'server.mjs' file (compiled from server.ts) is the Node.js Express server
# that bootstraps and serves your Angular Universal application.
CMD ["node", "dist/rossbryson-com/server/server.mjs"]

