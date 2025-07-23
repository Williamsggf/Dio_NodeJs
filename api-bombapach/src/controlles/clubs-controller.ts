import { Request, Response } from "express";
import * as services from "../services/clubs-services";

export const getClubs = async (req: Request, res: Response) => {
  const httpResponse = await services.getClubSerice();
  res.status(httpResponse.statusCode);
  res.send(httpResponse.body);
};

export const getClubById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const httpResponse = await services.getClubByIdSerice(id);
  res.status(httpResponse.statusCode);
  res.send(httpResponse.body);
};

export const postClub = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httpResponse = await services.createClubService(bodyValue);
  res.status(httpResponse.statusCode);
  res.send(httpResponse.body);
};

export const deteteClub = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const httpResponse = await services.deleteClubService(id);
  res.status(httpResponse.statusCode);
  res.send(httpResponse.body);
};

export const updateClub = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const bodyValue = req.body;
  const httpResponse = await services.updateClubService(id, bodyValue);
  res.status(httpResponse.statusCode);
  res.send(httpResponse.body);
};
