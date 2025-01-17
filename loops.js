// Basic for loop counting from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(`Count: ${i}`);
}

let sum = 0;
for (let i = 0; i < 10; i++) {
  sum = sum + i;
}

console.log(sum);

// For loop iterating over an array
const fruits = ["apple", "banana", "orange", "mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// For...of loop (modern way to iterate arrays)
const colors = ["red", "blue", "green"];
for (const color of colors) {
  console.log(`Color: ${color}`);
}

// For...in loop (for iterating object properties)
const person = {
  name: "John",
  age: 30,
  city: "New York",
};
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

///infinite loop

// for (let i = 1; i >= 0; i++) {
//   console.log(i);
// }

// iterate over a String

const name = "dipesh";
for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

// use for of

for (const char of name) {
  console.log(char);
}
