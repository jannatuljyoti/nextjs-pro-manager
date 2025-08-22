import { MongoClient, ServerApiVersion } from "mongodb";

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  const uri = process.env.MONGODB_URI;
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  // একবার connect করলেই global এ রেখে দেবো যাতে বারবার connect না হয়
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default async function dbConnect(collectionName) {
  const client = await clientPromise;
  return client.db(process.env.DB_NAME).collection(collectionName);
}
