//functions are blocks of code that perform a specific task

//there are two ways of function declaration
//eg function func(){}
//eg const func = () => {}

function sumoftwonumbers(a, b) {
  return a + b;
}

console.log("sum of two numbers is", sumoftwonumbers(1, 2));

// function to calculate the area of a rectangle

function areaofrectangle(length, width) {
  return length * width;
}

console.log("area of rectangle is", areaofrectangle(120, 20));

// function to calculate the area of a circle

function areaofcircle(radius) {
  return Math.PI * radius * radius;
}

console.log("area of circle is", areaofcircle(120));
// console.log(radius); //// undefined error coz radius variable is block scope

const x = "bihar".toUpperCase();
console.log(x);

//// count of vowels in a string

function countofvowels(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countofvowels("aeioufff"));
