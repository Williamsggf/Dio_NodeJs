import * as http from "http";
import {
  getListEpisodes,
  getEpisode,
} from "./controllers/podscasts-controller";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === "GET") {
      await getListEpisodes(req.headers, res);
    }
  }
);

const port = process.env.PORT || 3333;

server.listen(port, () => {
  console.log(`
    Server is running, port: ${port};
    `);
});
