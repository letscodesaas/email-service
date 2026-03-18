import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});

const _ENV = {
  PORT: process.env.PORT
    ? process.env.PORT
    : (() => {
        throw new Error("PORT is Requried");
      })(),
  DB: process.env.DB
    ? process.env.DB
    : (() => {
        throw new Error("DB is Requried");
      })(),

  SMTP_USER: process.env.SMTP_USER
    ? process.env.SMTP_USER
    : (() => {
        throw new Error("SMPT User is Requried");
      })(),
  SMTP_PASS: process.env.SMTP_PASS
    ? process.env.SMTP_PASS
    : (() => {
        throw new Error("SMTP_PASS is Requried");
      })(),
  SMTP_HOST: process.env.SMTP_HOST
    ? process.env.SMTP_HOST
    : (() => {
        throw new Error("SMTP_HOST is Requried");
      })(),
  SMTP_PORT: process.env.SMTP_PORT
    ? process.env.SMTP_PORT
    : (() => {
        throw new Error("SMTP_PORT is Requried");
      })(),
};

export const ENV = Object.freeze(_ENV);
