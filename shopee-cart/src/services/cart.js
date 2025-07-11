//cart
import createItem from "./item.js";

export async function addItem(userCart, item) {
  const created = await createItem(item.nome, item.price, item.quantity);
  userCart.push({
    id: item.id,
    ...created,
  });
}

export async function deleteItem(myCart, id) {
  const index = myCart.findIndex((item) => item.id === id);

  if (index !== -1) {
    const removed = myCart.splice(index, 1)[0];
    console.log(`✅ Produto "${removed.nome}" removido com sucesso!`);
  } else {
    console.log("❌ Produto não encontrado.");
  }
}

export async function removeItem(myCart) {
  myCart.length = 0;
}

export async function editItem(myCart, id, newQuantity) {
  const item = myCart.find((item) => item.id === id);

  if (!item) {
    console.log("❌ Produto não encontrado.");
    return;
  }

  if (newQuantity === 0) {
    await deleteItem(myCart, id);
  } else {
    item.quantity = newQuantity;
    item.subtotal = item.price * newQuantity;
  }
}

export function calculateTotal(userCart) {
  const total = userCart.reduce((total, item) => total + item.subtotal, 0);
  console.log(`Total: ${total}`);
}
