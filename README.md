# REST API — Express.js

A clean, production-ready REST API scaffold.

## Quick Start

```bash
npm install
cp .env.example .env
npm run dev        # development (nodemon)
npm start          # production
npm test           # run tests
```

## Endpoints

| Method | Route                  | Description      |
|--------|------------------------|------------------|
| GET    | /health                | Health check     |
| GET    | /api/v1/items          | List all items   |
| GET    | /api/v1/items/:id      | Get single item  |
| POST   | /api/v1/items          | Create item      |
| PUT    | /api/v1/items/:id      | Update item      |
| DELETE | /api/v1/items/:id      | Delete item      |

## Project Structure

```
src/
├── index.js          # Entry point
├── app.js            # Express app setup
├── routes/           # Route definitions
├── controllers/      # Business logic
└── middleware/       # Error handler, 404
tests/                # Jest + Supertest
```
