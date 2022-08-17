import { OrderStatus } from './interfaces/order-status';
import { ICustomerOrder } from './interfaces/customer-protocol';
import { IShoppingCartProtocol } from './interfaces/IShopping-Card-Protocol';
import { IMessaging } from './interfaces/IMessaging';
import { IPersistency } from './interfaces/IPersinstency';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: IShoppingCartProtocol,
    private readonly messaging: IMessaging,
    private readonly persistency: IPersistency,
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
