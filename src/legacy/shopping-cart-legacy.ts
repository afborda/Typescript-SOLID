type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => {
        return total + next.price;
      }, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho esta vazio!');
    }
    this._orderStatus = 'closed';
    this.sendMessage('Seu Pedido foi precessado!');
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('mensagem enviada', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo e pronto para envio');
  }

  clear(): void {
    console.log('Carrinho limpo!');
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCartLegacy();

shoppingCart.addItem({
  name: 'Lata',
  price: 30.9876,
});
shoppingCart.addItem({
  name: 'Latinha',
  price: 60.987,
});
shoppingCart.addItem({
  name: 'Latao',
  price: 90.569,
});

console.log(shoppingCart.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
