//event is an action that happens on the webpage eg: click, hover, scroll, etc

//event handler is a function that handles the event eg: onclick, onhover, onscroll, etc

//all event handlers have access to the event object properties and methods

//event object (e) is an object that contains information about the event

//event object properties and methods
//e.target - the element that triggered the event
//e.type - the type of event that occurred
//e.timeStamp - the time that the event occurred






//three ways of event handling
//1. inline event handler (using the onclick attribute on the element in html)
//2. event handler property (using the onclick property on the element in js)
//3. addEventListener (using the addEventListener method on the element in js)







//2. event handler property (using the onclick property on the element in js)
let btn = document.querySelector("#button1");

btn.onclick = (e) => {
  console.log(e);
  console.log("button was clicked using event handler property");
};

//3. addEventListener    (using the addEventListener method on the element in js)

//add event listener (event type, callback function)
btn.addEventListener("click", (e) => {
  console.log(e);
  console.log("button was clicked using addEventListener");
});
