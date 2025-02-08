
// const cart = ["shoes", "pants", "kurta"];

// ///using callback
// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
// });

// here the control of the flow is transferred to the createOrder function, and the developer has no control over the flow

// // this code using callback is unreliable and hard to manage
// // what if the callback function is not called or called multiple times


// this aboveissue with callback is inversion of control (IoC) 



// Inversion of control (IoC) is a software design principle that transfers control of an application's flow from the developer to an external source

// another issue with callback is callback hell
// callback hell is a code structure where multiple callbacks are nested within each other, creating a pyramid of doom

// eg createorder(cart, function(orderId){
//   proceedToPayment(orderId,function(paymentStatus){
//   showOrderSummary(paymentStatus){
//   updateWalletBalance(paymentStatus){
//   });
// });
/// this is callback hell  and it is hard to manage and read


// /// using promises
// const promise = createOrder(cart);
// // promise object is returned from createOrder api

// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });
// // once the promise object is returned from createOrder api, the then method is called only once, we can rely on it
// // this code using promises is more reliable and easy to manage

///// demonstrating promises by fetching user data from github api

console.log("fetching user data");
const gitHubApi = "https://api.github.com/users/akshaymarch7";

const user = fetch(gitHubApi); //we are calling the fetch api to get the user data from the github api , fetch returns a promise object

// console.log(typeof user);
console.log("this is user without timeout", user);
setTimeout(() => {
  console.log("this is user with timeout", user);
}, 2000);

user.then((data) => {
  console.log("this is user with then", data);
}); // attaching a callback function to the promise object


// promises are immutable

// ie we cannot change the promise object once it is created


/// promises are a container for a future value


/// promise chaining is a way to chain multiple promises together




// using promise chaining

const promise = createOrder(cart);

promise.then(function(orderId){
  proceedToPayment(orderId);
}).then(function(paymentStatus){
  showOrderSummary(paymentStatus);
}).then(function(orderSummary){
  updateWalletBalance(orderSummary);
});
// this is promise chaining and it is more readable and manageable


//  below code is using callback hell 


// eg createorder(cart, function(orderId){
//   proceedToPayment(orderId,function(paymentStatus){
//   showOrderSummary(paymentStatus){
//   updateWalletBalance(paymentStatus){
//   });
// });
/// this is callback hell  and it is hard to manage and read