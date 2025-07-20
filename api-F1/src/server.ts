import fastify from "fastify";
import { teams } from "./Repositoris/teams";
import { drivers } from "./Repositoris/drivers";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
  origin: "*",
  methods: ["GET"],
});

server.get("/teams", async (req, res) => {
  res.type("application/json").code(200);

  return { teams };
});

server.get("/drivers", async (req, res) => {
  res.type("application/json").code(200);

  return { drivers };
});

interface DriverParams {
  id: string;
}

server.get<{ Params: DriverParams }>("/drivers/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  const driver = drivers.find((driver) => driver.id === Number(id));
  res.type("application/json").code(200);

  if (!driver) {
    res.code(404).send({ error: "Driver not found" });
  } else {
    res.type("application/json").code(200);
    return { driver };
  }
});

server.listen({ port: Number(process.env.PORT) || 3000 }, () => {
  console.log("Server is running");
});
