import os from "node:os";
import { parentPort, workerData } from "node:worker_threads";
import { NodeMailerService } from "../service/nodemailer.services.js";
import { ENV } from "../env/env.js";

const transporter = new NodeMailerService(
  ENV.SMTP_HOST,
  ENV.SMTP_PASS,
  ENV.SMTP_PORT,
  ENV.SMTP_USER,
);

const send_notification_mails = async () => {
  try {
    const data = JSON.parse(workerData);
    if (!Array.isArray(data) || !data.length) {
      parentPort.postMessage("No user data");
      return;
    }

    let sent = 0;
    let failed = 0;

    for (const user of data) {
      if (!user?.email) {
        failed += 1;
        continue;
      }

      try {
        const info = await transporter.sendEmails(
          user.email,
          ENV.SMTP_USER,
          "Test",
          `<html><body><p>hello ${user.name ? user.name : ""}</p></body></html>`,
        );
        sent += 1;
        parentPort.postMessage({
          email: user.email,
          status: "sent",
          messageId: info,
        });
      } catch (error) {
        failed += 1;
        parentPort.postMessage({
          email: user.email,
          status: "failed",
          error: String(error),
        });
      }
    }

    parentPort.postMessage({
      status: "done",
      sent,
      failed,
      total: data.length,
    });
  } catch (error) {
    throw new Error(String(error));
  }
};

send_notification_mails();
