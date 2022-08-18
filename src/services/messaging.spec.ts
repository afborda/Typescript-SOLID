import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());
  it('should return undefined ', () => {
    const msg = 'email enviado';
    const sut = createSut();
    expect(sut.sendMessage(msg)).toBeUndefined();
  });
  it('should call sendMessage', () => {
    const msg = 'email enviado';
    const sut = createSut();
    const sendMessageSpy = jest.spyOn(console, 'log');
    sut.sendMessage(msg);
    expect(sendMessageSpy).toHaveBeenCalledTimes(1);
  });
  it('should call console.log with "Mensagem enviada" and msg', () => {
    const msg = 'teste';
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage(msg);
    expect(consoleSpy).toHaveBeenCalledWith('mensagem enviada', msg);
  });
});
