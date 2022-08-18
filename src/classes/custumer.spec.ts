import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (name: string, cnpj: string) => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firtname, lastname and cpf ...', () => {
    const sut = createIndividualCustomer('Abner', 'Fonseca', '1234');
    expect(sut).toHaveProperty('firstName', 'Abner');
    expect(sut).toHaveProperty('lastName', 'Fonseca');
    expect(sut).toHaveProperty('cpf', '1234');
  });
  it('should heve methods to get firstname, lastName and idn', () => {
    const sut = createIndividualCustomer('Abner', 'Fonseca', '1234');
    expect(sut.getName()).toBe('Abner Fonseca');
    expect(sut.getIDN()).toBe('1234');
  });
});

describe('EnterpriseCustomer', () => {
  it('should  have name and cnpj', () => {
    const sut = createEnterpriseCustomer('coca-cola', '999-666');
    expect(sut).toHaveProperty('name', 'coca-cola');
    expect(sut).toHaveProperty('cnpj', '999-666');
  });
  it('should have methods to get name and cnpj', () => {
    const sut = createEnterpriseCustomer('coca-cola', '999-666');

    expect(sut.getName()).toBe('coca-cola');
    expect(sut.getIDN()).toBe('999-666');
  });
});
