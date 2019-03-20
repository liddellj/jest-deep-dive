const Cat = require("../src/Cat");

describe("Cat", () => {
  let felix;

  beforeEach(() => {
    felix = new Cat();
  });

  it("should be able to create a cat", () => {
    expect(felix).toBeDefined();
  });

  describe('when the cat plays guitar', () => {
    beforeEach(() => {
      felix.plays.push('guitar');
    });

    it('should be cool', () => {
      expect(felix.isCool()).toBe(true);
    });
  });

  it.skip('should be able to test async method', () => {
    expect(felix.doSomething()).rejects.toBe(1);
  });

  it('should throw an error', () => {
    expect(() => felix.bark()).toThrow('bark bark')
  });

  // it.each([[true, "guitar"], [false, "piano"]])(
  //   'should return %s for isCool when playing %s',
  //   (expected, instrument) => {
  //     felix.plays.push(instrument);

  //     expect(felix.isCool()).toBe(expected);
  //   }
  // );

  it.each`
    instrument    | expected
    ${"guitar"}   | ${true}
    ${"piano"}    | ${false}
    `("should return $expected for for isCool when playing $instrument", ({ instrument, expected }) => {
      felix.plays.push(instrument);

      expect(felix.isCool()).toBe(expected);
    })

    it('should return data ', () => {
      expect(felix.getData()).toMatchSnapshot();
    });

    describe('when a cat is stroked', () => {
      beforeEach(() => {
        jest.useFakeTimers();

        felix.stroke();
      });

      describe('and we wait 5 seconds', () => {
        beforeEach(() => {
          //jest.advanceTimersByTime(5000);
          jest.runAllTimers();
        });

        it('should miaw after 5 seconds', () => {
          expect(felix.saidMiaw).toBe(true);
        });
      });
    });
});
