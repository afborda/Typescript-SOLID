import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';

// const noDiscount = new NoDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const fiftyPercentDisconunt = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDisconunt);
const persistency = new Persistency();
const messaging = new Messaging();
const individualCustomer = new IndividualCustomer('Abner', 'Fonseca', '02057006085');
// const enterpriseCustomer = new EnterpriseCustomer('Bora CODE', '02057006085');
const order = new Order(shoppingCart, messaging, persistency, individualCustomer);
shoppingCart.addItem(new Product('Lata', 30.9876));
shoppingCart.addItem(new Product('Latinha', 60.987));
shoppingCart.addItem(new Product('Latao', 90.569));

console.log(order.orderStatus);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscont());
order.checkout();
console.log(order.orderStatus);
