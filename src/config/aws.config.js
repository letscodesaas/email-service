import { config } from "aws-sdk";

export const AWS_CONFIG = config.update({
  region: "",
  accessKeyId: "",
  secretAccessKey: "",
  apiVersion: "2010-12-01",
});
