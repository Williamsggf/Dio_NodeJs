// todas as funções que tratam produtos

async function getFullName(codeId, productName) {
  console.log("product: " + codeId + "--" + productName);
}

module.exports = {
  getFullName,
};
