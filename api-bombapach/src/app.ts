import express from "express";
import { router } from "./routes/routers";

export default function createApp() {
  const app = express();

  app.use(express.json());

  app.use("/api", router);

  return app;
}
