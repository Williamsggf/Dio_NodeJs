import express from "express";
import * as ClubsController from "../controlles/clubs-controller";

export const routerClubs = express.Router();

routerClubs.get("/", ClubsController.getClubs);

routerClubs.get("/:id", ClubsController.getClubById);

routerClubs.post("/", ClubsController.postClub);

routerClubs.delete("/:id", ClubsController.deteteClub);

routerClubs.patch("/:id", ClubsController.updateClub);
