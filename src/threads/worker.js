import { Worker } from "node:worker_threads";

export const worker_thread = async (filename, workerdata) => {
  try {
    const worker = new Worker(filename, {
      workerData: JSON.stringify(workerdata),
    });
    return new Promise((resolve, reject) => {
      worker.on("message", (data) => {
        resolve(data);
      });
      worker.on("error", (err) => {
        reject(err);
      });
      worker.on("exit", (code) => {
        if (code !== 0) {
          reject(Error("worker exit"));
          return;
        }
      });
    });
  } catch (error) {
    throw new Error(String(error));
  }
};
