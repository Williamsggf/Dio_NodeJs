//index.js
import * as cartService from "./services/cart.js";
import { showMenu } from "./services/menu.js";

const myCart = [];

const Cart = [
  { id: 1, nome: "hotwheels Ferrari", price: 20.99, quantity: 1 },
  { id: 2, nome: "hotwheels Lanborghini", price: 39.99, quantity: 3 },
];

console.log("Welcome to Shopee Cart!");

for (const item of Cart) {
  await cartService.addItem(myCart, item);
}

showMenu(myCart);
