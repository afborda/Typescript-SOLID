import { CartItem } from './card-Item';

export interface IShoppingCartProtocol {
  items: Readonly<CartItem[]>;
  addItem(item: CartItem): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDiscont(): number;
  clear(): void;
  isEmpty(): boolean;
}
