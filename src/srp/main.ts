import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const persistency = new Persistency();
const messaging = new Messaging();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Lata', 30.9876));
shoppingCart.addItem(new Product('Latinha', 60.987));
shoppingCart.addItem(new Product('Latao', 90.569));
console.log(order.orderStatus);
// console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
