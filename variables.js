////////////////////////// let      ///block scope variable    block : {}

// let x = 89;

// let x = 90;         ///// cannot redeclare the same variable but can reassign the value

// console.log(x);    //error

// let x = 90;   ///// cannot redeclare the same variable but can reassign the value
// x = 56;

// console.log(x);    //56

////////////////////////// const      ///block scope variable

// const x = 90;
// x = 56;            // cannot redeclare the same variable and cannot reassign the value

// console.log(x);  //error

// const x = 90;
// const x = 89;   /// cannot redeclare the same variable

// console.log(x);

////////////////////////// var      ///global scope variable

// var x = 90;

// x = 56;    /// can redeclare the same variable and can reassign the value

// console.log(x);   //56

var x = 90;

var x = 89; /// can redeclare the same variable

console.log(x);

// isfollow = true;

let y = null;

//////////////////////////// objects   (collection of key value pairs)

const student = {
  firstName: "dipesh",
  age: 20,
  ispassed: true,
  sex: "male",
};

console.log(student.age);
