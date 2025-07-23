import express from "express";
import { router } from "./routes/routers";
import cors from "cors";

export default function createApp() {
  const app = express();

  app.use(express.json());

  app.use("/api", router);

  app.use(cors());

  return app;
}
