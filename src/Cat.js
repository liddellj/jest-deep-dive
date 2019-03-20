class Cat {
  constructor() {
    this.plays = [];
    this.saidMiaw = false;
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

  getData() {
    return [1, 2, 3, 65, 2, 4, 45]
  }

  stroke() {
    setTimeout(() => {
      this.saidMiaw = true;
    }, 5000);
  }
}

module.exports = Cat;
