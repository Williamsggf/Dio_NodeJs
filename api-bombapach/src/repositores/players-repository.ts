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
