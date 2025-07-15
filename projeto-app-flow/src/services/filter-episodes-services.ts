import { repositoryPodcast } from "../repositores/podcasts-repository";

export const serviceFilterEpisodes = async (podcastsName: string) => {
  const data = await repositoryPodcast(podcastsName);
  return data;
};
