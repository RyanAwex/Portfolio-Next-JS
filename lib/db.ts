import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local",
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      minPoolSize: 2,
      serverSelectionTimeoutMS: 30000, // Increased to 30 seconds
      socketTimeoutMS: 45000,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error("MongoDB connection error:", e);

    // Provide more helpful error messages
    if (e instanceof Error) {
      if (e.message.includes("ETIMEOUT") || e.message.includes("querySrv")) {
        console.error(`
MongoDB Atlas Connection Issue:
- This error typically means your IP address is not whitelisted in MongoDB Atlas
- Or there's a network/DNS issue preventing connection
- Please check:
  1. MongoDB Atlas Network Access settings (add your IP or 0.0.0.0/0 for testing)
  2. Your internet connection
  3. Firewall settings
        `);
      }
    }
    throw e;
  }

  return cached.conn;
}

export default connectDB;
