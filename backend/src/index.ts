import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import helloRouter from "./routes/hello";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Backend is running with TypeScript + Express 🚀");
});

// API routes
app.use("/api", helloRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
