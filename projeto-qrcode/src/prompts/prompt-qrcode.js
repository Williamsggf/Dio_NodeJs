import chalk from "chalk";

const promptQRCode = [
  {
    name: "link",
    description: chalk.bold(`Digite o link para gerar o QR CODE: \n`),
    required: true,
  },
  {
    name: "select",
    description: chalk.blue.bold(
      `Escolha uma opção: \n1 - QRCode tamanho Normal \n2 - QRcode para terminal\n`
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas 1 ou 2"),
    required: true,
  },
];

export default promptQRCode;
