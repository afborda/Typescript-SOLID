import { IMessaging } from '../classes/interfaces/IMessaging';

export class Messaging implements IMessaging {
  sendMessage(msg: string): void {
    console.log('mensagem enviada', msg);
  }
}
