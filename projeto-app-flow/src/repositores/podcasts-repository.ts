import fs from "fs";
import path from "path";

const pathData = path.join(__dirname, "./src/repositores/podcasts.json");

export const repositoryPodcast = async () => {
  const data = fs.readFileSync(pathData, "utf-8");
  const podcasts = JSON.parse(data);
  return podcasts;
};
