// Hoisting
greet();

function greet() {
    console.log("Hello!");
}
function greet1() {
    console.log("Pawan");
}

greet1();

var myVar; // Hoisted declaration initialized to undefined
console.log(myVar); 
myVar = "Hello World"; // Assignment stays exactly where it was
console.log(myVar); 

