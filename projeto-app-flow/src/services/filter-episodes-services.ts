import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositores/podcasts-repository";
import { PodcastTransferModel } from "../modules/podcast-tranfer-models";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
  podcastsName: IncomingMessage
): Promise<PodcastTransferModel> => {
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  const queryString = podcastsName.url?.split("?p=")[1] ?? "";
  const data = await repositoryPodcast(queryString);

  responseFormat.statusCode =
    data.length !== 0 ? StatusCode.OK : StatusCode.NOT_FOUND;

  responseFormat.body = data;

  return responseFormat;
};
