import chalk from "chalk";

const mainPrompt = [
  {
    name: "select",
    description: chalk.yellow.bold(
      `Escolha uma ferramenta: \n1 - QRCode \n2 - Password\n`
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas 1 ou 2"),
    required: true,
  },
];

export default mainPrompt;
