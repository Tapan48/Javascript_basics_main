// Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope before the code is executed.




// 1 Hoisting with var (Variables)


console.log(a); // undefined
var a = 10;
console.log(a); // 10


// Internally, the code behaves like this:

var a;  // Declaration is hoisted
console.log(a); // undefined
a = 10;  // Initialization happens here
console.log(a); // 10







// 2️) Hoisting with let & const (Variables)
console.log(b); // ReferenceError ❌
let b = 20;
console.log(b);

// Internally, it behaves like this:


// // b is hoisted but not initialized → Temporal Dead Zone (TDZ)
// let b;  // Declared here
// console.log(b); // ❌ Error (TDZ)
// b = 20;
// console.log(b);




console.log(x); // ✅ undefined (because `var` is hoisted with `undefined`)
var x = 5;
console.log(x); // 5

console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
const y = 10;
console.log(y);




// 3️) Hoisting with function declarations



// Hoisting with Function Declarations (Works)

sayHello(); // ✅ Works! Prints "Hello!"

function sayHello() {
  console.log("Hello!");
}





// Hoisting with Function Expressions (Does Not Work)

greet(); // ❌ TypeError: greet is not a function

var greet = function() {
  console.log("Hi!");
};



// SummaryTable
// Feature	                       Hoisted?	   Usable Before Declaration?
// var	                               ✅ Yes	⚠️ Undefined
// let & const	                       ✅ Yes	❌ Temporal Dead Zone (Error)
// Function Declaration	                ✅ Yes	✅ Yes
// Function Expression (var)	        ✅ Yes	❌ No (Undefined)
