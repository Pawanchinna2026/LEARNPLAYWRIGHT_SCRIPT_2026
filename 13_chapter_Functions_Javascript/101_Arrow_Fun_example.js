// Arrow Functions
const greet = () => {
    console.log("Hello");
};
greet();
// 2
const sayHello = () => "Ram!"; // No arguments and parameters
console.log(sayHello());
// 3
const greet1 = () => "Hello Star";
console.log(greet1());
// 4 add
const add = (a, b) => a + b;
console.log(add(10, 20));

// 5 multiply
const mul = (a, b) => a * b;
console.log(mul(10, 2));
// 6 sqaure
const square = n => n * n;
console.log(square(4));
// double
const d=(a)=>a*4;
d(6.50)
// no parameters empty paranthesis
const getEnv=()=>"Stagging"
console.log(getEnv())
// Multi line 
const result=(_marks)=>
{
if(_marks>70) return "Pass"; 
return "fail"; }

console.log(result(77))