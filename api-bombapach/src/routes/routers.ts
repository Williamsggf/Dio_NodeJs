import express from "express";
import { routerPlayers } from "./players-routers";

export const router = express.Router();

router.use("/players", routerPlayers);
