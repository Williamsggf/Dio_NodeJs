async function handle() {
  let characters = [];
  let password = "";

  if (process.env.UPPERCASE_LETTERS === "true") {
    characters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (process.env.LOWERCASE_LETTERS === "true") {
    characters.push(..."abcdefghijklmnopqrstuvwxyz");
  }
  if (process.env.DIGITS === "true") {
    characters.push(..."0123456789");
  }
  if (process.env.SPECIAL_CHARACTERS === "true") {
    characters.push(..."!@#$%&*()-_+=<>?");
  }

  const length = Number(process.env.PASSWORD_LENGTH) || 8;

  if (characters.length === 0) {
    throw new Error(
      "Nenhum tipo de caractere foi selecionado. Verifique suas variáveis de ambiente."
    );
  }

  for (let i = password.length; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

export default handle;
