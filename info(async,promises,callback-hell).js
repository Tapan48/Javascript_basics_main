//callback ---> callback hell ---> promises ---> promise chaining ---> async/await    ( better in terms of readability and manageability)

//callback is a function that is passed as an argument to another function
//callback hell is a situation where we have multiple callbacks nested inside each other
//promises are a way to handle asynchronous operations in a more readable and manageable way
//but promise chaining is not readable and manageable
//async/await is a way to handle asynchronous operations in a more readable and manageable way than promises and callback hell

// Example: Print three messages in sequence with 1 second delay between each

// 1. Callback Hell Version
console.log("--- Callback Hell Version ---");
function printWithDelay(message, callback) {
  setTimeout(() => {
    console.log(message);
    if (callback) callback();
  }, 1000);
}

// Nested callbacks
printWithDelay("First message", () => {
  printWithDelay("Second message", () => {
    printWithDelay("Third message", () => {
      console.log("Callback hell version completed");
    });
  });
});

// 2. Promise Chain Version
console.log("--- Promise Chain Version ---");
function printWithPromise(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, 1000);
  });
}

// Promise chain
printWithPromise("First message")
  .then(() => printWithPromise("Second message"))
  .then(() => printWithPromise("Third message"))
  .then(() => console.log("Promise chain version completed"));

// 3. Async/Await Version
console.log("--- Async/Await Version ---");
async function printMessages() {
  try {
    await printWithPromise("First message");
    await printWithPromise("Second message");
    await printWithPromise("Third message");
    console.log("Async/await version completed");
  } catch (error) {
    console.error("Error:", error);
  }
}

printMessages();
