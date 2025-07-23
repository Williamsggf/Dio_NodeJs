import express from "express";
import { routerPlayers } from "./players-routers";
import { routerClubs } from "./clubs-routers";

export const router = express.Router();

router.use("/players", routerPlayers);

router.use("clubs", routerClubs);
