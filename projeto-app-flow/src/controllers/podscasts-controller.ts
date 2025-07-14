import { IncomingHttpHeaders, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";

export const getListEpisodes = async (
  req: IncomingHttpHeaders,
  res: ServerResponse
) => {
  const data = await serviceListEpisodes();
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(data));
};

export const getEpisode = (req: IncomingHttpHeaders, res: ServerResponse) => {};
