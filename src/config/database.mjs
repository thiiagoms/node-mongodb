import mongoose from "mongoose";
import "dotenv/config";

let dbHost = process.env.DATABASE_HOST;
let dbName = process.env.DATABASE_NAME;
let dbUser = process.env.DATABASE_USER;
let dbPass = process.env.DATABASE_PASS;

mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPass}@${dbHost}.0wiax.mongodb.net/${dbName}`
);

let db = mongoose.connection;

export default db;
