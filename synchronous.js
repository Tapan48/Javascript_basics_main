//synchronous code is executed line by line
//each line of code is executed in order and waits for the previous line to finish before executing
//this is why the output is "hello" followed by "world"

// console.log("hello");
// console.log("world");
// console.log("this is a test");

//asynchronous code is executed in parallel
//asynchronous code is executed in the background and does not block the main thread

//eg of asynchronous code

///settimeout is a function that takes a callback function and a delay in milliseconds

//

// console.log("this is 1");
// console.log("this is 2");
// setTimeout(() => {
//   console.log("this is a settimeout2");
// }, 3000);
// console.log("this is 3");
// console.log("this is 4");

//this is why the output is "this is 1" followed by "this is 2" followed by "this is 3" followed by "this is 4" followed by "this is a settimeout2" after 3 seconds
// did not wait for the settimeout to finish before executing the next line of code

// const x = () => {
//   console.log("this is a settimeout3");
// };
// setTimeout(x, 3000);






//callback hell(nested callbacks) is a situation where a function is called inside another function and the function is called inside another function and so on
//this is why the output is "this is a settimeout3" after 3 seconds

setTimeout(() => {
  console.log("First callback");
  setTimeout(() => {
    console.log("Second callback");
    setTimeout(() => {
      console.log("Third callback");
    }, 2000);
  }, 2000);
}, 2000);

