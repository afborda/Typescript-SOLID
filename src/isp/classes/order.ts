import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart';
import { ICustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: ICustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho esta vazio!');
    }
    this._orderStatus = 'closed';
    this.messaging.sendMessage('Seu Pedido foi precessado!');
    this.persistency.saveOrder();
    console.log('O cliente é:', this.customer.getName(), this.customer.getIDN());

    this.cart.clear();
  }
}
