// get the element by id
let heading = document.getElementById("heading2");
console.log(heading);
console.dir(heading);

let heading1 = document.getElementById("heading");
// console.log(heading1);
// console.dir(heading1);
// heading1.textContent = "New Content for ng";

// get the element by class name
let paragraph = document.getElementsByClassName("paragraph");

console.log(paragraph);

// get the element by tag name
let div = document.getElementsByTagName("div");
div.textContent = "this is a new div";
console.log(div);

//query selector detects  whether element is class or id or tag name

// get the element by query selector tag name
let heading2 = document.querySelector("p"); // it will select the first p tag
console.dir(heading2);

let heading3 = document.querySelectorAll("p"); // it will select all the p tags
console.dir(heading3);

//get the element by query selector class
let heading4 = document.querySelector(".paragraph"); // it will select the first p tag with class paragraph
console.dir(heading4);

let heading5 = document.querySelectorAll(".paragraph"); // it will select all the p tags with class paragraph
console.dir(heading5);

// get the element by query selector id
let heading6 = document.querySelector("#heading"); // it will select the first p tag with id heading
console.dir(heading6);

console.log(heading6.tagName);
console.log(heading4.tagName);

console.log(document.querySelector("div").children);

//// properties of the element after selecting it  
///accessing elements using query selector and then changing its values using properties

let div1 = document.querySelector("div");
console.log(div1);
console.dir(div1);
console.log(div1.innerText); // innerText is used to get the text content of the element
console.log(div1.innerHTML); // innerHTML is used to get the html content of the element
console.log(div1.tagName);

let headingg = document.querySelector("h1");
console.log(headingg.innerText);
console.log(headingg.innerHTML);
console.log(headingg.tagName);
