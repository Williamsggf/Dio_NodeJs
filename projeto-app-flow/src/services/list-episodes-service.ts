import { repositoryPodcast } from "../repositores/podcasts-repository";

export const serviceListEpisodes = async () => {
  const data = await repositoryPodcast();
  return data;
};
