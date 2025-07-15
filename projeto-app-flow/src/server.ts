import * as http from "http";
import {
  getListEpisodes,
  getFilterEosides,
} from "./controllers/podscasts-controller";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === "GET" && req.url === "/api/list") {
      await getListEpisodes(req.headers, res);
    }
    if (req.method === "GET" && req.url === "/api/episode") {
      await getFilterEosides(req.headers, res);
    }
  }
);

const port = process.env.PORT || 3333;

server.listen(port, () => {
  console.log(`
    Server is running, port: ${port};
    `);
});
