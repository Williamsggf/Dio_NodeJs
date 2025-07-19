import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-services";
import { PodcastTransferModel } from "../modules/podcast-tranfer-models";

const DEFALUT_CONTENT = { "content-type": "application/json" };

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const data: PodcastTransferModel = await serviceListEpisodes();
  res.writeHead(data.statusCode, DEFALUT_CONTENT);
  res.write(JSON.stringify(data.body));
  res.end();
};

export const getFilterEosides = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceFilterEpisodes(req);

  res.writeHead(content.statusCode, DEFALUT_CONTENT);
  res.write(JSON.stringify(content.body));
  res.end();
};
