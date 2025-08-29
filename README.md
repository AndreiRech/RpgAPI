# RpgAPI - A Tabletop RPG Campaign Manager

RpgAPI is a backend RESTful API designed to help Game Masters (GMs) and players organize and manage their tabletop role-playing game campaigns. This project serves as a digital binder, allowing for the structured storage of adventures, sessions, NPCs, locations, and other materials, making campaign management easier and more accessible.

The API is built with a modern, scalable, and maintainable architecture, perfect for developers looking for a solid foundation for their own projects or for GMs wanting a powerful, self-hosted tool.

## ✨ Features

* **Campaign Management:** Create, read, update, and delete campaigns.
* **User System:** Foundation for multi-user support with ownership of campaigns.
* **Modular Architecture:** Easily extend the API with new resources like NPCs, Items, Monsters, and Locations.
* **Containerized Environment:** Run the entire application and database with a single Docker command.
* **Database Migrations:** Keep your database schema in sync with your models using Prisma.
* **Code Quality:** Enforced code style and quality with ESLint and Prettier.

## 🛠️ Tech Stack

* **Backend:** [Node.js](https://nodejs.org/) with [TypeScript](https://www.typescriptlang.org/)
* **Framework:** [Express.js](https://expressjs.com/)
* **Database:** [PostgreSQL](https://www.postgresql.org/)
* **ORM:** [Prisma](https://www.prisma.io/)
* **Containerization:** [Docker](https://www.docker.com/) & Docker Compose
* **Testing:** [Jest](https://jestjs.io/) & [Supertest](https://github.com/ladjs/supertest)
* **Linting & Formatting:** [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

## 🏗️ Project Architecture

The project follows a clean, layered architecture organized by feature modules. This approach promotes separation of concerns and high cohesion, making the codebase easy to understand, test, and scale.

* **`src/modules/{feature}`**: Each core feature (e.g., `campaigns`, `users`) resides in its own module.
* **Routes (`*.routes.ts`)**: Defines the API endpoints and connects them to controllers. It is responsible for handling the HTTP layer.
* **Controllers (`*.controller.ts`)**: Receives and validates incoming requests, calling the appropriate service to handle the business logic.
* **Services (`*.service.ts`)**: Contains the core business logic, orchestrating operations and interacting with the repository layer.
* **Repositories (`*.repository.ts`)**: Manages all communication with the database via the Prisma client. This is the only layer that should interact directly with the data source.

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

* [Node.js](https://nodejs.org/en/download/) (v18.x or later recommended)
* [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd rpg-api
    ```

2.  **Create the environment file:**
    Duplicate the example environment file and fill in your details.
    ```bash
    cp .env.example .env
    ```
    The default values in `.env.example` are configured to work with the `docker-compose.yml` file. It's recommended to start with these values.

3.  **Install project dependencies:**
    ```bash
    npm install
    ```

## ධ Running the Application

1.  **Start the Docker containers:**
    This command will build the API image and start both the API and the PostgreSQL database containers in detached mode.
    ```bash
    docker-compose up -d --build
    ```
    Your API will be running at `http://localhost:3000` (or the `PORT` you specified in `.env`).

2.  **Run the database migrations:**
    This command will apply the schema defined in `prisma/schema.prisma` to your database, creating the necessary tables.
    ```bash
     docker-compose exec api npm run migrate:dev
    ```
    Prisma will prompt you to enter a name for the migration.

## 📜 Available Scripts

Here are the main scripts available in `package.json`:

| Script                 | Description                                                               |
| ---------------------- | ------------------------------------------------------------------------- |
| `npm run start:dev`    | Starts the development server with hot-reloading using `ts-node-dev`.     |
| `npm run build`        | Compiles the TypeScript code into JavaScript in the `dist/` directory.    |
| `npm run start:prod`   | Starts the application from the compiled code in `dist/`.                 |
| `npm test`             | Runs all tests using Jest.                                                |
| `npm run lint`         | Lints the codebase for potential errors and style issues.                 |
| `npm run lint:fix`     | Automatically fixes linting issues.                                       |
| `npm run migrate:dev`  | Runs Prisma migrations to update the database schema.                     |
| `docker-compose up -d` | Starts the Docker containers in the background.                           |
| `docker-compose down`  | Stops and removes the Docker containers.                                  |

## 📚 API Documentation

API documentation will be provided via Swagger (OpenAPI). Once implemented, it will be available at the `/docs` endpoint.