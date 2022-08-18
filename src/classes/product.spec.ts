import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have properties name and prices', () => {
    const sut = createSut('lata', 54.67);
    expect(sut).toHaveProperty('name', 'lata');
    expect(sut.price).toBeCloseTo(54.67);
  });
});
