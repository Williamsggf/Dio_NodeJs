import { ClubModel } from "../models/club-model";
import {
  deleteOneClub,
  repositoryClubById,
  repositoryClubs,
  saveClub,
  updateClub,
} from "../repositores/clubs-repository";
import * as HttpResponse from "../utils/http-helper";

export const getClubSerice = async (): Promise<{
  statusCode: number;
  body: ClubModel[];
}> => {
  const data = await repositoryClubs();
  const response = data ? HttpResponse.ok(data) : HttpResponse.noContent();
  return response;
};

export const getClubByIdSerice = async (
  id: number
): Promise<{ statusCode: number; body: ClubModel | null }> => {
  const data = await repositoryClubById(id);
  const response = data ? HttpResponse.ok(data) : HttpResponse.noContent();
  return response;
};

export const createClubService = async (
  club: Omit<ClubModel, "id">
): Promise<{ statusCode: number; body: any }> => {
  const { nome, statistics } = club;

  // Verificação simples de campos vazios ou ausentes
  if (!nome || !statistics) {
    return HttpResponse.badRequest();
  }

  const clubs = await repositoryClubs();
  const lastId = Number(clubs.length > 0 ? clubs[clubs.length - 1].id : 0);
  const newClub: ClubModel = { id: lastId + 1, ...club };

  await saveClub(newClub);
  return HttpResponse.ok(newClub);
};

export const deleteClubService = async (id: number) => {
  const data = await deleteOneClub(id);
  return HttpResponse.ok(data);
};

export const updateClubService = async (
  id: number,
  update: Partial<Omit<ClubModel, "id">>
): Promise<{ statusCode: number; body: any }> => {
  const clubs = await updateClub(id, update);
  return HttpResponse.ok(clubs);
};
