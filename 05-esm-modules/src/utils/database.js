const databaseType = {
  userType: "Admin",
  typeData: "dataLocal",
};

async function connectToDatabase(dataName) {
  console.log(`Comectado ao banco  ${dataName}`);
}

async function diconnectToDatabase(dataName) {
  console.log(`Desconectado do banco ${dataName}`);
}
export { connectToDatabase, diconnectToDatabase, databaseType };
