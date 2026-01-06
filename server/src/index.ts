import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import { apiRouter } from "./routes";

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false,
  })
);

// Preflight (OPTIONS) support
app.options("*", cors());


// All API routes collected here
app.use(apiRouter);

const port = Number(process.env.PORT) || 4000;
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});

