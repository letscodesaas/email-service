import { SESV2 } from "aws-sdk";
import { AWS_CONFIG } from "../config/aws.config.js";

export class SES_EMAIl_SERVICE {
  ses;
  constructor() {
    this.ses = new SESV2(AWS_CONFIG);
  }
  async sendBulkMails(parmas) {
    try {
      ses.sendBulkEmail(parmas, (err, data) => {
        if (err) {
          return new Promise((_, reject) => reject(err));
        } else {
          return new Promise((resolve, _) => resolve(data));
        }
      });
    } catch (error) {
      throw new Error(String(error));
    }
  }
}
