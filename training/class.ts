class Fraction {

  constructor(private _numerator: number, private _donominator: number){}

  get numerator() {
    return this._numerator;
  }

  get denominator() {
    return this._donominator;
  }

  toString(): string {
    return `${this._numerator}/${this._donominator}`;
  }
  
  add(other: Fraction): Fraction {
    const resultNumerator = this._numerator * other._donominator + this._donominator * other._numerator;
    const resultDenominator = this._donominator * other._donominator;
    return new Fraction(resultNumerator, resultDenominator);
  } 
}

const f1 = new Fraction(1, 2);
console.log(f1.numerator);
console.log(f1.denominator);

const f2 = new Fraction(1, 3);
const result = f1.add(f2);
console.log(result.toString());
