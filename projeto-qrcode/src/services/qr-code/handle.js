import chalk from "chalk";
import qr from "qrcode-terminal";

async function handle(err, ressut) {
  if (err) {
    console.log("Error on application");
    return;
  }

  const inSmall = ressut.select == 2;

  qr.generate(ressut.link, { small: inSmall }, (qrCode) => {
    console.log(chalk.green("QR Code gerado com sucesso!"));
    console.log(qrCode);
  });
}

export default handle;
