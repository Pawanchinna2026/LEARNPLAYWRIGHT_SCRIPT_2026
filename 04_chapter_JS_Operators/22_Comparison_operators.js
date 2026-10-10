// Comparison operators
let x = 5;
let y = 10;
console.log(x < y);  // true
console.log(x > y);  // false
console.log(x <= y); // true
console.log(x >= y); // false
console.log(5 == '5');   // true  (Type coercion: string '5' becomes number 5)
console.log(5 === '5');  // false (Strict check: number !== string)

// 3. Loose Inequality vs Strict Inequality
console.log(5 != '5');   // false (Values match after conversion)
console.log(5 !== '5');  // true  (Data types differ)