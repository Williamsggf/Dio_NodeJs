//item.js

async function createItem(nome, price, quantity) {
  return {
    nome,
    price,
    quantity,
    subtotal: price * quantity,
  };
}

export default createItem;
