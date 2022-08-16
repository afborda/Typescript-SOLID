import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount, NoDiscount } from './classes/discount';

const noDiscount = new NoDiscount();
const fiftyPercentDisconunt = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDisconunt);
const persistency = new Persistency();
const messaging = new Messaging();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Lata', 30.9876));
shoppingCart.addItem(new Product('Latinha', 60.987));
shoppingCart.addItem(new Product('Latao', 90.569));
console.log(order.orderStatus);
// console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscont());
order.checkout();
console.log(order.orderStatus);
