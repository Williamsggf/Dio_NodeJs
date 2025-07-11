// menu.js
import readline from "readline";
import * as cartService from "./cart.js";

export function showMenu(myCart) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function askQuestion(query) {
    return new Promise((resolve) => rl.question(query, resolve));
  }

  // Mostrar o carrinho
  if (myCart.length === 0) {
    console.log("🛒 Seu carrinho está vazio.");
  } else {
    console.log("\n🛒 Carrinho atual:");
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

  rl.question(
    `\nQual ação você deseja realizar?\n1 - Adicionar novo item\n2 - Remover item\n3 - Editar item\n4 - Finalizar compra\n> `,
    async (answer) => {
      switch (answer.trim()) {
        case "1":
          const nome = await askQuestion("Nome: ");
          const price = parseFloat(await askQuestion("Preço: "));
          const quantity = parseInt(await askQuestion("Quantidade: "), 10);

          const lastId = myCart.length > 0 ? myCart[myCart.length - 1].id : 0;
          const id = lastId + 1;
          const item = { id, nome, price, quantity };

          await cartService.addItem(myCart, item);

          console.log("\n🛒 Carrinho atualizado:");
          myCart.forEach((item) => {
            console.log(
              `Produto: ${item.nome}, Preço: R$${item.price.toFixed(
                2
              )}, Quantidade: ${
                item.quantity
              }, Subtotal: R$${item.subtotal.toFixed(2)}`
            );
          });
          break;

        case "2":
        case "3":
          const action =
            answer.trim() === "2" ? "excluir" : "editar quantidade";
          console.log("🗑️ Itens no carrinho:");
          myCart.forEach((item) => {
            console.log(
              `ID: ${item.id}, Produto: ${item.nome}, Quantidade: ${
                item.quantity
              }, Preço: R$${item.price.toFixed(
                2
              )}, Subtotal: R$${item.subtotal.toFixed(2)}`
            );
          });

          const itemId = parseInt(
            await askQuestion(`Digite o ID do produto para ${action}: `),
            10
          );

          if (answer.trim() === "2") {
            await cartService.deleteItem(myCart, itemId);
          } else {
            const newQuantity = parseInt(
              await askQuestion("Digite a nova quantidade: "),
              10
            );
            if (isNaN(newQuantity) || newQuantity < 0) {
              console.log("❌ Quantidade inválida.");
              break;
            }
            await cartService.editItem(myCart, itemId, newQuantity);
          }
          break;

        case "4":
          console.log("✅ Finalizando a compra...");
          await cartService.removeItem(myCart);
          console.log("Compra realizada com sucesso!");
          break;
        default:
          console.log("❌ Opção inválida.");
          break;
      }

      rl.close();
      setTimeout(() => showMenu(myCart), 300); // Para evitar erro ao fechar stdin
    }
  );
}
