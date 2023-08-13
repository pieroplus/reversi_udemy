function add(v1: number, v2: number) {
  return v1 + v2;
}

function calculate(
  v1: number,
  v2: number,
  callback: (a: number, b:number) => number
): number {
  return callback(v1, v2);
}

function multiply(v1: number, v2: number): number{
  return v1 * v2;
}

function hello() {
  console.log('hello');
}

const hello2 = () => {console.log('hello2');}

console.log(calculate(1, 2, add));
console.log(calculate(2, 3, multiply));
setTimeout(hello, 2000);
setTimeout(hello2, 3000);
setTimeout(() => {console.log('hello3')}, 1000);
