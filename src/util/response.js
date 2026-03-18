import { response } from "express";

export class Response_Handler {
  static handler(obj) {
    return response.status(obj.status).json(obj.message);
  }
}
