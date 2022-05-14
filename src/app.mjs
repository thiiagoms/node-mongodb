import express from "express";
import db from "./config/database.mjs";
import router from "./routes/routes.js";

db.on("error", console.log.bind(console, "Database connection error"));
db.once("open", () => console.log("[*] Database connected!!"));

const app = express();

app.use(express.json());

router(app);

export default app;
