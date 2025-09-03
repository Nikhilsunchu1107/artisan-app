import { Router, Request, Response } from "express";
import { db } from "../firebase";

const router = Router();

// Example GET route
router.get("/hello", async (req: Request, res: Response) => {
  try {
    const snapshot = await db.collection("users").get();
    res.json({
      message: "Hello from backend 🚀",
      userCount: snapshot.size,
    });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;
