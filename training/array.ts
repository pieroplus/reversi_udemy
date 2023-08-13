const numbers = [10, 20, 30, 40, 50];
console.log(numbers);
numbers.forEach((num, i) => {
  const double = num * 2;
  console.log(`${i}: ${num}`);
});
const sum = numbers.reduce((previous, current) => previous + current, 0);
console.log(sum);

const names = ['Alice', 'Bob', 'Carol'];
const users = names.map((name, i) => {
  return {
    id: i,
    name
  }
});
console.log(users);
const evenIdUsers = users.filter(user => user.id % 2 === 0);
console.log(evenIdUsers);

