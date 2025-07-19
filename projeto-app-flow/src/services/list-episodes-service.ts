import { PodcastTransferModel } from "../modules/podcast-tranfer-models";
import { repositoryPodcast } from "../repositores/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async () => {
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };
  const data = await repositoryPodcast();

  responseFormat.statusCode =
    data.length !== 0 ? StatusCode.OK : StatusCode.NOT_FOUND;

  responseFormat.body = data;

  return responseFormat;
};
