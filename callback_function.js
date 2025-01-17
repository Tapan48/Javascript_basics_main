// callback function is a function that is passed as an argument to another function

let arr = [1, 2, 3, 4, 5];

///////////////////////////////////// forEach method
arr.forEach((item) => {
  //// forEach is a higher order function which takes a callback function item  as an argument

  ///// it takes a callback function item  as an argument
  console.log(item * item);
}); //////////////////   higher order function(callback function)

//// forEach(): Executes a provided function once for each array element.

let cities = ["delhi", "mumbai", "chennai"];

cities.forEach((item, idx, array) => {
  console.log(item, idx, array);
});

// write a arrow function which squares each element of the array

let nums = [3, 4, 5, 6, 7, 8, 9, 10];

let square = (item) => {
  //// arrow function
  console.log(item * item);
};

nums.forEach(square); // forEach(): Executes a provided function once for each array element

//////////////////////////////// map method
let array = [1, 2, 3, 4, 5];

let nearr = array.map((item) => {
  //map(): Creates a new array with the results of calling a provided function on every element.      map is

  return item * 2;
});

console.log(nearr);

///////////////////////////////////// filter method

let harray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let hnewarray = harray.filter((item) => {
  return item % 2 === 0; //// filter(): Creates a new array with all elements that pass the test implemented by the provided function.
});

console.log(hnewarray);

///////////////////////////////////// reduce method
// reduce(): Applies a function against an accumulator and each element to reduce it to a single value.

let rarray = [1, 2, 3, 4, 5, 11, 7, 8, 9, 10];

let rnewarray = rarray.reduce((acc, item) => {
  return acc + item;
});

console.log(rnewarray);

// find largest number in array

let largest = (rarray) => {
  return rarray.reduce((acc, item) => {
    return acc > item ? acc : item;
  });
};

console.log(largest(rarray));
