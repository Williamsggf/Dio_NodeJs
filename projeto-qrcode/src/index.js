import prompt from "prompt";
import mainPrompts from "./prompts/prompt-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/passoword/create.js";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  prompt.start();
  prompt.get(mainPrompts, async (err, choose) => {
    if (err) {
      console.error("Prompt error:", err);
      return;
    }

    if (choose.select == 1) {
      await createQRCode(); // Make sure to call the function
    }

    if (choose.select == 2) {
      await createPassword();
    }
  });
}

main();
