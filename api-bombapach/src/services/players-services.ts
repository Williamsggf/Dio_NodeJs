import { PlayerModel } from "../models/player-model";
import {
  deleteOnePlayer,
  repositoryPlayerById,
  repositoryPlayers,
  savePlayer,
  updatePlayer,
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

export const createPlayerService = async (
  player: Omit<PlayerModel, "id">
): Promise<{ statusCode: number; body: any }> => {
  const { name, Clube, position, statistics } = player;

  // Verificação simples de campos vazios ou ausentes
  if (!name || !Clube || !position || !statistics) {
    return HttpResponse.badRequest();
  }

  const players = await repositoryPlayers();
  const lastId = Number(
    players.length > 0 ? players[players.length - 1].id : 0
  );
  const newPlayer: PlayerModel = { id: lastId + 1, ...player };

  await savePlayer(newPlayer);
  return HttpResponse.ok(newPlayer);
};

export const deletePlayerService = async (id: number) => {
  const data = await deleteOnePlayer(id);
  return HttpResponse.ok(data);
};

export const updatePlayerService = async (
  id: number,
  update: Partial<Omit<PlayerModel, "id">>
): Promise<{ statusCode: number; body: any }> => {
  const players = await updatePlayer(id, update);
  return HttpResponse.ok(players);
};
