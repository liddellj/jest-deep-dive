class PetShop {
  constructor(catFactory) {
    this.catFactory = catFactory;
  }
  async sellCat(name) {
    const cat = await this.catFactory.createCat(name);

    return cat;
  }
}

module.exports = PetShop;