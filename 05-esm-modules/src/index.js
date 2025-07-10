import * as database from "./utils/database.js";

database.connectToDatabase("DB_teste");

console.log("rodando !!");

database.diconnectToDatabase("DB_teste");
