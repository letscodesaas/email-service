import { Router } from "express";
import { NotificationController } from "../controllers/notifiy.controller.js";
export const router = Router();

router.get("/sendbulkemail", NotificationController.sendBulkEmails);
