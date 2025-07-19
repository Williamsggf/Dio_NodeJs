import * as http from "http";
import {
  getListEpisodes,
  getFilterEosides,
} from "./controllers/podscasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  const baseUrl = req.url?.split("?")[0];

  if (req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(req, res);
  }
  if (req.method === HttpMethod.GET && baseUrl === Routes.FILTER) {
    await getFilterEosides(req, res);
  }
};
