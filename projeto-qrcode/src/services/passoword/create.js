import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
  console.log(chalk.green.bold("Password gerado com sucesso!"));
  const password = await handle();
  console.log(chalk.blue.bold(password));
}

export default createPassword;
