import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import admin from "firebase-admin";
import path from "path";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Load Firebase Admin SDK
const serviceAccount = require(path.resolve(__dirname, "serviceAccountKey.json"));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://artisan-app-ae358.firebaseio.com", // optional, needed if using Realtime DB
  });
}

// Example route to test backend
app.get("/", (req: Request, res: Response) => {
  res.send("Backend is running with TypeScript + Express 🚀");
});

// Example route to test Firebase Admin
app.get("/test-firebase", async (req: Request, res: Response) => {
  try {
    const db = admin.firestore();
    const snapshot = await db.collection("users").get();
    res.json({ count: snapshot.size });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
