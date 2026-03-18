import { CollectionQuery } from "../models/subscriber.models.js";
import { ENV } from "../env/env.js";
export const get_users = async () => {
  const collection = new CollectionQuery("contentregisters", ENV.DB);
  const info = await collection.getCollectionData();
  return info.length;
};
