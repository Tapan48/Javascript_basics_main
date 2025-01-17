// promises are a solution to callback hell
// promises are objects that represent the eventual completion or failure of an asynchronous operation

// promises have three states: pending, fulfilled, and rejected

// resolve and reject are the two parameters of the promise constructor

//when we make api calls, calls sometimes return a promise and we have to handle the promise

//eg

const promise = new Promise((resolve, reject) => {
  console.log("this is a promise");
  resolve("promise resolved");
});

// Function that returns a promise
const checkNumber = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 0) {
      resolve(`${number} is positive`);
    } else {
      reject(`${number} is not positive`);
    }
  });
};

// Handling the promise
console.log("Checking number...");

// checkNumber(5)
//   .then((result) => {
//     // if promise is resolved
//     console.log("Success:", result); // Will print: Success: 5 is positive
//   })
//   .catch((error) => {
//     console.log("Error:", error); // if promise is rejected
//   })
//   .finally(() => {
//     console.log("Check completed"); // finally is always executed
//   });

// // Let's also try with a negative number
// checkNumber(-3)
//   .then((result) => {
//     console.log("Success:", result);
//   })
//   .catch((error) => {
//     console.log("Error:", error); // Will print: Error: -3 is not positive
//   })
//   .finally(() => {
//     console.log("Check completed");
//   });

//promise chaining is a way to chain multiple promises together
//we can chain multiple then and catch blocks

// Example of promise chaining with multiple then blocks
checkNumber(10)
  .then((result) => {
    console.log("First then:", result); // "10 is positive"
    return parseInt(result.split(' ')[0]) * 2; // Extract number and multiply
  })
  .then((doubledResult) => {
    console.log("Second then:", doubledResult); 
    return doubledResult + 5;
  })
  .then((finalResult) => {
    console.log("Third then:", finalResult);
  })
  .catch((error) => {
    console.log("Error in chain:", error);
  })
  .finally(() => {
    console.log("Chain completed");
  });

//fetch api call using promises
fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => {
    ////first then handles the response
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    ///second then handles the parsed data
    console.log("API Response (promise):", data);
  })
  .catch((error) => {
    ///catch handles any errors in the promise chain
    console.error("Error fetching data:", error);
  })
  .finally(() => {
    console.log("Promise API call completed");
  });
