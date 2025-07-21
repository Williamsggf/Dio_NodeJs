import express from "express";
import * as PlayersController from "../controlles/players-controller";

export const routerPlayers = express.Router();

routerPlayers.get("/", PlayersController.getPlayer);

routerPlayers.post("/", PlayersController.getPlayer);

routerPlayers.get("/:id", PlayersController.getPlayerById);
