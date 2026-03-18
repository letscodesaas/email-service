import { app } from "./server.js";
import { ENV } from "./env/env.js";
import { WebSocketServer } from "ws";
import { createServer } from "node:http";
import { ConnectionDB } from "./database/db.js";
import { registerWsHandlers } from "./websocket/ws.handler.js";

const server = createServer(app);

export const wss = new WebSocketServer({ server });

registerWsHandlers(wss);

server.listen(ENV.PORT, () => {
  console.log("Server is listing to", ENV.PORT);
});

// const connection = new ConnectionDB();
// connection
//   .connect()
//   .then(() => {})
//   .catch((e) => {
//     console.log(e);
//   });
