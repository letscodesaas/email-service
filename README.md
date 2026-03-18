# Email Service (Node.js)

A lightweight Node.js service with:
- Express HTTP server
- WebSocket server (`ws`)
- MongoDB read access for subscriber/user data

## Requirements

- Node.js 18+
- npm
- MongoDB connection string

## Project Structure

```text
src/
  index.js                # HTTP + WebSocket server bootstrap
  server.js               # Express app + routes
  env/env.js              # environment variable loading/validation
  websocket/ws.handler.js # WebSocket event handling
  functions/handler.functions.js
  models/subscriber.models.js
```

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
DB=mongodb+srv://<username>:<password>@<cluster>/<db>?retryWrites=true&w=majority
```

- `PORT` (required): server port
- `DB` (required): MongoDB connection URI

## Install

```bash
npm install
```

## Run (Development)

```bash
npm run dev
```

The server starts on `http://localhost:<PORT>`.

## HTTP API

### Health Check

- `GET /health`
- Response:

```json
{ "message": "healthy" }
```

## WebSocket API

Connect to:

```text
ws://localhost:<PORT>
```

### On connect
Server sends:

```json
{ "userid": "client:1" }
```

### Request user data
Client sends:

```json
{ "events": "get_users" }
```

Server responds with:

```json
{ "events": "get_users", "data": 42 }
```

> `data` is currently a **count** of users returned from MongoDB.

## Notes

- CORS is enabled for the Express app.
- WebSocket client sessions are tracked in-memory.
- MongoDB database name is currently hardcoded as `test` in `src/models/subscriber.models.js`.
