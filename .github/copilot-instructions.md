# AI Coding Agent Instructions for `learning-club`

Welcome to the `learning-club` codebase! This document provides essential guidance for AI coding agents to be productive in this project. It outlines the architecture, workflows, conventions, and integration points specific to this repository.

## Project Overview

- **Purpose**: The `learning-club` project is a learning platform designed to facilitate collaboration and knowledge sharing.
- **Structure**: The project is organized into modular components, with a focus on scalability and maintainability.
  - `webapp/`: Contains the main web application built with TypeScript, Bun, and Express.

## Key Workflows

### Development

1. **Start the Development Server**:

   ```bash
   cd webapp
   bun run src/index.ts
   ```

   This command starts the Express server. The default port is `3000`.

2. **Install Dependencies**:
   ```bash
   bun install
   ```
   Use Bun to manage dependencies.

### Testing

- Currently, no testing framework is set up. Add one if needed (e.g., Jest, Mocha).

### Debugging

- Use `console.log` for debugging. Add breakpoints in TypeScript files if using an IDE.

## Project-Specific Conventions

- **TypeScript**: Use strict typing. Ensure all `req` and `res` objects in Express routes are typed using `Request` and `Response` from `express`.

  ```typescript
  import { Request, Response } from "express";

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
  });
  ```

- **Folder Structure**:
  - `src/`: Contains all source code.
  - `dist/`: Output directory for compiled files.

## Integration Points

- **External Dependencies**:
  - `express`: Web framework for handling HTTP requests.
  - `@types/express`: Type definitions for Express.
- **Build Tool**:
  - `bun`: Used for dependency management and running scripts.

## Examples

### Adding a New Route

1. Open `src/index.ts`.
2. Add a new route:
   ```typescript
   app.get("/new-route", (req: Request, res: Response) => {
     res.send("This is a new route!");
   });
   ```
3. Restart the server to apply changes.

## Notes

- Ensure all new code is properly typed and follows the existing conventions.
- Update this document as the project evolves.
- Always confirm changes before applying them to the codebase.
- Work in small, manageable increments to facilitate easier reviews and testing.

---

For any questions or clarifications, refer to the `README.md` or contact the repository owner.
