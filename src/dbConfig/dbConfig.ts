import { MongoClient, Db } from 'mongodb';

const uri: string = process.env.MONGO_URI || '';
const dbName: string = 'OnlineEcommerce';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

if (!uri) {
  throw new Error('Please define the MONGO_URI environment variable inside .env.local');
}

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri); // No need for options like useNewUrlParser and useUnifiedTopology

  await client.connect();
  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
