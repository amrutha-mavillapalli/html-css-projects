// Function statement example
function greet(name) {
    console.log("Hello, " + name + "!");
}   
// Function expression example
var farewell = function(name) {
    console.log("Goodbye, " + name + "!");
}       

// Anonomous Function
// function () {
//     console.log("This is an anonymous function.");
// }

//named Function expression
var sayHello = function hello(name) {
    console.log("Hello, " + name + "!");
}
sayHello("Alice"); // prints "Hello, Alice!"
hello("Bob"); // throws an error because hello is not defined outside the function expression

// First-class functions example
var b=function (param1) {
    return function xyz() 
    {
    }
}   
console.log(b(10)); // prints the function definition of xyz