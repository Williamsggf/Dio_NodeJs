import { PlayerModel } from "../models/player-model";
import {
  repositoryPlayerById,
  repositoryPlayers,
} from "../repositores/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerSerice = async (): Promise<{
  statusCode: number;
  body: PlayerModel[];
}> => {
  const data = await repositoryPlayers();
  const response = data ? HttpResponse.ok(data) : HttpResponse.noContent();
  return response;
};

export const getPlayerByIdSerice = async (
  id: number
): Promise<{ statusCode: number; body: PlayerModel | null }> => {
  const data = await repositoryPlayerById(id);
  const response = data ? HttpResponse.ok(data) : HttpResponse.noContent();
  return response;
};

export const postPlayerSerice = async (name: String;
  Clube: String;
  position: String;
  statistics: {
    Overall: Number;
    Pace: Number;
    Shooting: Number;
    Passing: Number;
    Dribbling: Number;
    Defending: Number;
    Physicality: Number;
  })