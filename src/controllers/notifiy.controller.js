import path from "node:path";
import { fileURLToPath } from "node:url";
import { worker_thread } from "../threads/worker.js";
import os from "node:os";

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
// const worker_file_name = path.join(
//   _dirname,
//   "../",
//   "threads",
//   "load_user_process.js",
// );
const send_notification_mails_worker = path.join(
  _dirname,
  "../",
  "threads",
  "send_notification_process.js",
);

export class NotificationController {
  static async sendBulkEmails(req, res) {
    try {
      //   const worker = await worker_thread(worker_file_name);
      //   console.log(worker);
      const users = [
        { name: "Amit", email: "user1@example.com" },
        { name: "Rahul", email: "user2@example.com" },
        { name: "Priya", email: "user3@example.com" },
        { name: "Sneha", email: "user4@example.com" },
        { name: "Vikram", email: "user5@example.com" },
        { name: "Neha", email: "user6@example.com" },
        { name: "Rohit", email: "user7@example.com" },
        { name: "Pooja", email: "user8@example.com" },
        { name: "Karan", email: "user9@example.com" },
        { name: "Anjali", email: "user10@example.com" },
        { name: "Manish", email: "user11@example.com" },
        { name: "Deepika", email: "user12@example.com" },
        { name: "Arjun", email: "user13@example.com" },
        { name: "Meera", email: "user14@example.com" },
        { name: "Suresh", email: "user15@example.com" },
        { name: "Kavita", email: "user16@example.com" },
        { name: "Nikhil", email: "user17@example.com" },
        { name: "Isha", email: "user18@example.com" },
        { name: "Varun", email: "user19@example.com" },
        { name: "Riya", email: "user20@example.com" },
      ];

      const MAX_THREADS = os.cpus().length;

      const chunkSize = Math.ceil(users.length / MAX_THREADS);

      const chunks = [];
      for (let i = 0; i < users.length; i += chunkSize) {
        chunks.push(users.slice(i, i + chunkSize));
      }

      const workerPromises = chunks.map((chunk) =>
        worker_thread(send_notification_mails_worker, chunk),
      );

      const results = await Promise.all(workerPromises);

      console.log("All workers finished:", results);

      res.status(200).json({ message: "success" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
