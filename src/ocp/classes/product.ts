import { CartItem } from './interfaces/card-Item';

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}
