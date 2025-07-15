import { IncomingHttpHeaders, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-services";

export const getListEpisodes = async (
  req: IncomingHttpHeaders,
  res: ServerResponse
) => {
  const data = await serviceListEpisodes();
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(data));
};

export const getFilterEosides = async (
  req: IncomingHttpHeaders,
  res: ServerResponse
) => {
  const content = await serviceFilterEpisodes(JSON.stringify(req));

  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(content));
};
