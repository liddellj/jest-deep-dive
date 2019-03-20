const Cat = require('../src/Cat');

class CatFactory {
  async createCat(name) {
    return new Cat();
  }
}

module.exports = CatFactory;