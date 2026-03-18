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
};

export const ENV = Object.freeze(_ENV);
