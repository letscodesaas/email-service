import mongoose from "mongoose";
import { ENV } from "../env/env.js";

export class ConnectionDB {
  url;
  constructor() {
    this.url = ENV.PORT;
  }
  async connect() {
    try {
      await mongoose.connect(this.url);
      console.log("Database connected");
    } catch (error) {
      throw new Error(String(error));
    }
  }
}
