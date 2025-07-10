// menu.js
import readline from "readline";
import * as cartService from "./cart.js";

export function showMenu(myCart) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  function askQuestion(query, rl) {
    return new Promise((resolve) => rl.question(query, resolve));
  }
  rl.question(
    `
Which action do you want to take?
1 - Add new item
2 - Remove item
3 - Edit item
4 - Checkout
5 - Vew cart
> `,
    async (answer) => {
      switch (answer.trim()) {
        case "1":
          const nome = await askQuestion("Name: ", rl);
          const price = parseFloat(await askQuestion("Price: ", rl));
          const quantity = parseInt(await askQuestion("Quantity: ", rl), 10);

          const lastId = myCart.length > 0 ? myCart[myCart.length - 1].id : 0;
          const id = lastId + 1;

          const item = { id, nome, price, quantity };
          await cartService.addItem(myCart, item);

          const Produts = myCart.map((item) => {
            console.log(
              `Produto:  ${item.nome}, Preço: R$ ${item.price.toFixed(
                2
              )}, Quantidade: ${
                item.quantity
              }, Subtotal: R$ ${item.subtotal.toFixed(2)}`
            );
          });
          rl.close();
          break;
        case "2":
          console.log("🗑️ Itens no carrinho:");
          myCart.forEach((item) => {
            console.log(`ID: ${item.id}, Produto: ${item.nome}`);
          });
          const idDelete = parseInt(
            await askQuestion("Digite o ID do produto a excluir: ", rl),
            10
          );
          await cartService.deleteItem(myCart, idDelete);

          break;
        case "3":
          break;
        case "4":
          console.log("Checking out...");
          await cartService.removeItem(myCart);
          console.log("Checkout successful!");
          break;
        case "5":
          if (myCart.length === 0) {
            console.log("Your cart is empty.");
          } else {
            console.log("\n🛒 Current cart:");
            myCart.forEach((item) => {
              console.log(
                `Produto: ${item.nome}, Quantidade: ${
                  item.quantity
                }, Preço: R$${item.price.toFixed(
                  2
                )}, Subtotal: R$${item.subtotal.toFixed(2)}`
              );
            });
            cartService.calculateTotal(myCart);
          }
          break;
        default:
          console.log("Invalid option.");
      }

      rl.close();
      showMenu(myCart);
    }
  );
}
