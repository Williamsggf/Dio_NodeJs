import { Request, Response } from "express";
import * as services from "../services/players-services";

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await services.getPlayerSerice();
  res.status(httpResponse.statusCode);
  res.send(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const httpResponse = await services.getPlayerByIdSerice(id);
  res.status(httpResponse.statusCode);
  res.send(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
}