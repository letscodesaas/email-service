// load the user info
import { parentPort } from "node:worker_threads";
import { CollectionQuery } from "../models/subscriber.models.js";
import { ENV } from "../env/env.js";

const load_user_data = async () => {
  try {
    const subscriber = new CollectionQuery("contentregisters", ENV.DB);
    const info = await subscriber.getCollectionData();
    parentPort.postMessage(JSON.stringify(info));
  } catch (error) {
    throw new Error(String(error));
  }
};
load_user_data()
