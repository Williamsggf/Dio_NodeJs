import express from "express";
import * as PlayersController from "../controlles/players-controller";

export const routerPlayers = express.Router();

routerPlayers.get("/", PlayersController.getPlayer);

routerPlayers.post("/", PlayersController.postPlayer);

routerPlayers.delete("/:id", PlayersController.detetePlayer);

routerPlayers.patch("/:id", PlayersController.updatePlayer);

routerPlayers.get("/:id", PlayersController.getPlayerById);
