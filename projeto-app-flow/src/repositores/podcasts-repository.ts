import fs from "fs";
import path from "path";
import { PodcastModel } from "../modules/podcast-model";

const pathData = path.join(__dirname, "../repositores/podcasts.json");

export const repositoryPodcast = async (
  podcastsName?: string
): Promise<PodcastModel[]> => {
  const data = fs.readFileSync(pathData, "utf-8");
  let podcasts = JSON.parse(data);

  if (podcastsName) {
    podcasts = podcasts.filter((podcast: PodcastModel) => {
      return podcast.podcastName === podcastsName;
    });
  }

  return podcasts;
};
