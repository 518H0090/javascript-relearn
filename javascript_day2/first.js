const date = new Date("2024-03-25");
document.write(JSON.stringify(date));

const number = 14;
document.write(number);

const is_finish = false;
document.write(is_finish);

const numbers = [1, 2, 34, 5];
document.write(numbers);

const fruits = [
  { name: "banana", price: 20 },
  { name: "apple", price: 40 },
];

fruits.forEach((x) => document.write(x.name + "-" + x.price));

console.log(typeof date);
console.log(typeof number);
console.log(typeof is_finish);
console.log(typeof numbers);
console.log(typeof fruits);

let length;
console.log(typeof length);

greetMe("Hoi aita");

function greetMe(name) {
  console.log("Hello " + name);
}
