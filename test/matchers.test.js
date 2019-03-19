const Cat = require('../src/Cat');

describe('matchers', () => {
  it('should be able to match primitives', () => {
    expect(1 + 2).toBe(3); // === 
    expect(1 + 2).toEqual(3); // ==
    expect(1 + 2).not.toEqual(4);
  });

  it('should be able to match objects', () => {
    const felix = new Cat();
    const bob = new Cat();

    expect(felix).toEqual(bob);
  });

  it('should be able to identify a cat', () => {
    const felix = new Cat();

    expect(felix).toEqual(expect.any(Cat));
  });

  it('should be able to assert against arrays', () => {
    const felix = new Cat();

    expect([felix]).toEqual(expect.arrayContaining([felix]));
  });

  it('should be able to compose matchers', () => {
    const felix = new Cat();

    const pets = {
      dogs: [],
      cats: [felix]
    };

    expect(pets).toEqual({
      dogs: expect.any(Array),
      cats: expect.arrayContaining([felix])
    });

    expect(pets).toEqual(expect.objectContaining({
      cats: expect.arrayContaining([felix])
    }))
  })
});