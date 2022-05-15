import mongoose from 'mongoose';
import 'dotenv/config';

const dbHost = process.env.DATABASE_HOST;
const dbName = process.env.DATABASE_NAME;
const dbUser = process.env.DATABASE_USER;
const dbPass = process.env.DATABASE_PASS;

mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPass}@${dbHost}.0wiax.mongodb.net/${dbName}`
);

const db = mongoose.connection;

export default db;
