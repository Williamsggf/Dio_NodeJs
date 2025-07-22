import fs from "fs";
import path from "path";
import { PlayerModel } from "../models/player-model";

const dataPlayers = path.join(__dirname, "../data/players.json");

// Função que retorna todos os jogadores
export const repositoryPlayers = async (): Promise<PlayerModel[]> => {
  const data = fs.readFileSync(dataPlayers, "utf-8");
  const players: PlayerModel[] = JSON.parse(data);
  return players;
};

// Função que retorna jogador por ID
export const repositoryPlayerById = async (
  id: number
): Promise<PlayerModel | null> => {
  const players = await repositoryPlayers();
  const player = players.find((p) => p.id === id);
  return player || null;
};

export const savePlayer = async (player: PlayerModel): Promise<void> => {
  const players = await repositoryPlayers();
  players.push(player);
  await fs.promises.writeFile(dataPlayers, JSON.stringify(players, null, 2));
};

export const deleteOnePlayer = async (id: number) => {
  const players = await repositoryPlayers();
  const playerIndex = players.findIndex((p) => p.id === id);
  players.splice(playerIndex, 1);
  await fs.promises.writeFile(dataPlayers, JSON.stringify(players, null, 2));
  return { message: "Jogador deletado com sucesso" };
};

export const updatePlayer = async (
  id: number,
  update: Partial<PlayerModel>
): Promise<{ statusCode: number; body: any }> => {
  const players = await repositoryPlayers();
  const playerIndex = players.findIndex((p) => p.id === id);

  if (playerIndex === -1) {
    return { statusCode: 404, body: "Jogador não encontrado" };
  }

  const existingPlayer = players[playerIndex];
  const updatedPlayer = { ...existingPlayer, ...update };
  players[playerIndex] = updatedPlayer;

  await fs.promises.writeFile(dataPlayers, JSON.stringify(players, null, 2));

  return { statusCode: 200, body: updatedPlayer };
};
