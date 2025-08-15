# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Docker

This project includes Docker support for easy containerization and deployment.

### Building and Running with Docker

```sh
# Build the Docker image
docker build -t remult-vercel-test .

# Run the container
docker run -p 3000:3000 remult-vercel-test
```

### Using Docker Compose

```sh
# Build and start the application
docker-compose up --build

# Run in detached mode
docker-compose up -d

# Stop the services
docker-compose down
```

### Docker Features

- **Multi-stage build**: Optimizes image size by separating build and runtime dependencies
- **Security**: Runs as non-root user
- **Health checks**: Monitors application health
- **Production ready**: Uses production dependencies only in final image
- **Port mapping**: Exposes the application on port 3000
- **Adaptive deployment**: Automatically uses Node adapter in Docker, Vercel adapter for cloud deployment

The application will be available at `http://localhost:3000` when running in Docker.
