function add1(v1: number, v2: number): number {
  return v1 + v2;
}

const add2 = function (v1: number, v2: number): number{
  return v1 + v2;
}

const add3 = (v1: number, v2: number): number => v1 + v2;

console.log(add1(1, 2));
console.log(add2(1, 3));
console.log(add3(1, 4));