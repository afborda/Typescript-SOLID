import { IPersistency } from '../classes/interfaces/IPersinstency';

export class Persistency implements IPersistency {
  saveOrder(): void {
    console.log('Pedido salvo e pronto para envio');
  }
}
