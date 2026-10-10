// NUMERIC SEPARATORS
 let largeNum= 1_000_000; // Literals
console.log("Numeric Separator 1_000_000: ", largeNum); // Numeric Separator 1_000_000: 1000000
let binaryNum= 0b1010_1010; // Literals
console.log("Numeric Separator 0b1010_1010: ", binaryNum); // Numeric Separator 0b1010_1010: 170
let hexNum= 0xFF_FF_FF; // Literals
console.log("Numeric Separator 0xFF_FF_FF: ", hexNum); // Numeric Separator 0xFF_FF_FF: 16777215

// BIG INT 
let bigIntNum= 1234567890123456789012345678901234567890n; // Literals
console.log("BigInt: ", bigIntNum); // BigInt:  1234567890123456789012345678901234567890
let bigIntNum2= 0x1fffffffffffffn; // Literals
console.log("BigInt 0x1fffffffffffffn: ", bigIntNum2); // BigInt 0x1fffffffffffffn:  9007199254740991
let bigIntNum3=("1234567890123456789012345678901234567890n"); // Literals
console.log("BigInt from string: ", bigIntNum3); // BigInt from string:  1234567890123456789012345678901234567890

let bigIntNum4= BigInt("42"); // Literals
console.log("BigInt from string: ", bigIntNum4); // BigInt from string:  42
