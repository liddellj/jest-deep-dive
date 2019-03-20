import Calculator from '../src/Calculator';

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  it('should be able to add two numbers', () => {
    expect(calc.add(1, 2)).toBe(3);
  });
});