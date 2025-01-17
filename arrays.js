// Array

const fruits = ["apple", "banana", "orange", "mango"];

console.log(fruits[0]);

console.log(fruits.length);
console.log(fruits);

// Original prices array
const prices = [100, 200, 300, 400, 500];

// Calculate and apply 10% discount directly to prices array
console.log("Original prices:", [...prices]); // Using spread operator to show original prices
console.log("Prices after 10% discount:");

for (let i = 0; i < prices.length; i++) {
  const discount = prices[i] * 0.1;
  prices[i] = prices[i] - discount;
}

console.log(prices);

// Demonstrating push and pop in arrays
let numbers = [1, 2, 3];
console.log("Initial array:", numbers);

// Push: adds elements to end of array
for (let i = 4; i <= 6; i++) {
  numbers.push(i);
  console.log(`After pushing ${i}:`, numbers);
}

// Pop: removes elements from end of array
for (let i = 0; i < 3; i++) {
  const poppedValue = numbers.pop();
  console.log(`Popped value: ${poppedValue}`);
  console.log("Array after pop:", numbers);
}
