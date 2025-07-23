import fs from "fs";
import path from "path";
import { ClubModel } from "../models/club-model";

const dataClubs = path.join(__dirname, "../data/clubs.json");

// Função que retorna todos os jogadores
export const repositoryClubs = async (): Promise<ClubModel[]> => {
  const data = fs.readFileSync(dataClubs, "utf-8");
  const clubs: ClubModel[] = JSON.parse(data);
  return clubs;
};

// Função que retorna jogador por ID
export const repositoryClubById = async (
  id: number
): Promise<ClubModel | null> => {
  const clubs = await repositoryClubs();
  const club = clubs.find((p) => p.id === id);
  return club || null;
};

export const saveClub = async (club: ClubModel): Promise<void> => {
  const clubs = await repositoryClubs();

  clubs.push(club);

  await fs.promises.writeFile(dataClubs, JSON.stringify(clubs, null, 2));
};

export const deleteOneClub = async (id: number) => {
  const clubs = await repositoryClubs();
  const clubIndex = clubs.findIndex((p) => p.id === id);
  clubs.splice(clubIndex, 1);
  await fs.promises.writeFile(dataClubs, JSON.stringify(clubs, null, 2));
  return { message: "Jogador deletado com sucesso" };
};

export const updateClub = async (
  id: number,
  update: Partial<ClubModel>
): Promise<{ statusCode: number; body: any }> => {
  const clubs = await repositoryClubs();
  const clubIndex = clubs.findIndex((p) => p.id === id);

  if (clubIndex === -1) {
    return { statusCode: 404, body: "Jogador não encontrado" };
  }

  const existingClub = clubs[clubIndex];
  const updatedClub = { ...existingClub, ...update };
  clubs[clubIndex] = updatedClub;

  await fs.promises.writeFile(dataClubs, JSON.stringify(clubs, null, 2));

  return { statusCode: 200, body: updatedClub };
};
