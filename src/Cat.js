class Cat {
  constructor() {
    this.plays = [];
  }

  isCool() {
    return this.plays.includes("guitar");
  }

  async doSomething() {
    return 1;
  }

  bark() {
    throw new Error('bark bark');
  }
}

module.exports = Cat;
