const PetShop = require("../src/PetShop");
const Cat = require('../src/Cat');

describe("PetShop", () => {
  let shop;
  let factory;

  beforeEach(() => {
    factory = {
      createCat: jest.fn(async () => new Cat())
    };

    shop = new PetShop(factory);
  });

  describe("when a cat is sold", () => {
    beforeEach(async () => {
      await shop.sellCat('felix');
    });

    it("should ask the cat factory for a cat", () => {
      expect(factory.createCat).toBeCalledWith('felix');

      expect(factory.createCat.mock.calls[0][0]).toBe('felix');
    });
  });
});
