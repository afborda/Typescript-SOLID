import { Discount } from './discount';
import { CartItem } from './interfaces/card-Item';
import { IShoppingCartProtocol } from './interfaces/IShopping-Card-Protocol';

export class ShoppingCart implements IShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => {
        return total + next.price;
      }, 0)
      .toFixed(2);
  }

  totalWithDiscont(): number {
    return this.discount.calculate(this.total());
  }

  clear(): void {
    console.log('Carrinho limpo!');
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}
