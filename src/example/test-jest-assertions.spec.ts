describe('Primietive values', () => {
  it('should teste jest assertion ', () => {
    const number = 10;
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).not.toBeNull();
  });
});

describe('Verify Objects', () => {
  it(' should verify object ', () => {
    const person = { name: 'Abner', age: 27 };
    const anotherPerson = { name: 'Cristine', age: 24 };

    expect(person).not.toEqual(anotherPerson);
    expect(person).toHaveProperty('age', 27);
  });
});
