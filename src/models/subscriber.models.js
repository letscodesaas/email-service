import { MongoClient } from "mongodb";

export class CollectionQuery {
  collection;
  url;
  constructor(c, url) {
    this.collection = c;
    this.url = url;
  }
  async getCollectionData() {
    let client;
    try {
      client = new MongoClient(this.url);
      await client.connect();
      const database = client.db("test");
      const collection = database.collection(this.collection);
      const info = await collection.find({}).toArray();
      return info;
    } catch (error) {
      throw new Error(String(error));
    } finally {
      await client?.close();
    }
  }
}
