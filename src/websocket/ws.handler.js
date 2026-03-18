import { get_users } from "../functions/handler.functions.js";
const clients = new Map();
let id = 0;

export const registerWsHandlers = (wss) => {
  wss.on("connection", (socket) => {
    const clientId = `client:${++id}`;
    clients.set(clientId, socket);

    socket.send(
      JSON.stringify({
        userid: clientId,
      }),
    );

    socket.on("message", async (rawData) => {
      const payload = rawData.toString();
      try {
        const parsed = JSON.parse(payload);
        if (parsed.events === "get_users") {
          const info = await get_users();
          socket.send(
            JSON.stringify({
              events: "get_users",
              data: info,
            }),
          );
        }
        
      } catch (e) {
        console.log(e);
        console.log("ws message:", payload);
      }
    });

    socket.on("close", () => {
      clients.delete(clientId);
      console.log(`WebSocket client disconnected: ${clientId}`);
    });

    socket.on("error", (error) => {
      console.error(`WebSocket error from ${clientId}:`, error);
    });
  });

  wss.on("close", () => {
    clients.clear();
    console.log("WebSocket server closed");
  });
};
