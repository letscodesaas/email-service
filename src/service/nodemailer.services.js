import { createTransport } from "nodemailer";

export class NodeMailerService {
  stmp_host;
  stmp_password;
  stmp_port;
  stmp_user;
  transport;
  constructor(host, password, port, user) {
    this.stmp_host = host;
    this.stmp_password = password;
    this.stmp_port = port;
    this.stmp_user = user;
    this.transport = createTransport({
      host: this.stmp_host,
      secure: false,
      port: this.stmp_port,
      auth: {
        user: this.stmp_user,
        pass: this.stmp_password,
      },
    });
  }

  async sendEmails(to, from,subject, body) {
    try {
      const info = await this.transport.sendMail({
        from: from,
        to: to,
        subject:subject,
        html: body,
      });
      return info.messageId;
    } catch (error) {
      throw new Error(String(error));
    }
  }
}
