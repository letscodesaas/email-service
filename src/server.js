import express from "express";
import cors from "cors";


export const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", (_req, res) => {
  res.status(200).json({ message: "healthy" });
});
