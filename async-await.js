// async/await is a way to handle asynchronous operations in a more readable and manageable way than promises and callback hell

// async function is a function that always  returns a promise
// await is a keyword that is used to pause the execution of the function until a promise is resolved or rejected.
//This means the code following the await statement will not execute until the awaited promise settles.

//Handles asynchronous operations in a more synchronous-looking way

// Example of async/await with fetch
const fetchData = async () => {
  try {
    console.log("Starting to fetch data...");

    // Await the fetch call
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");

    // Check if response is ok
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Await the json parsing
    const data = await response.json();
    console.log("API Response (async/await):", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    console.log("Async/await API call completed");
  }
};

// Call the async function
fetchData();
