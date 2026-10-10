// javascript  Identifiers rules


let myVariable = "starts with letter "; // Valid identifier
let _private = "starts with underscore "; // Valid identifier
let $dollar = "starts with dollar sign "; // Valid identifier
 
let item1 = "starts with letter and contains number "; // Valid identifier
let _item2 = "starts with underscore and contains number "; // Valid identifier
let $item123 = "starts with dollar sign and contains number "; // Valid identifier

// Invalid identifiers
//let 1stItem = "starts with number "; // Invalid identifier
//let 2ndItem = "starts with number "; // Invalid identifier

//let  Function = "reserved keyword "; // Invalid identifier
let MyVar= "uppercase M"; // Valid identifier
let myvar="lowercase v"; // Valid identifier

let café="Unicode letter café"; // Valid identifier
let 我 ="Chinese character 我"; // Valid identifier
let \u0041 = "Unicode escape sequence A"; // Valid identifier
let \u005f=" Unicode escape sequence _"; // Valid identifier

// let my-variable = "contains"; // Invalid identifier
// let my variable = "contains"; // Invalid identifier    // SyntaxError: Unexpected identifier
//  let my@variable = "contains"; // Invalid identifier   // SyntaxError: Unexpected token '@'
// let my#variable = "contains"; // Invalid identifier    // SyntaxError: Unexpected token '#'
// let my!variable = "contains"; // Invalid identifier    // SyntaxError: Unexpected token '!'

// 1.camelCase (standard for JS Variables and functions)
 let myName = "camelCase"; // Valid identifier
 let totalAmount = "99.99"; // Valid identifier
 let isAvailableIn = true; // Valid identifier

 // 2.PascalCase (standard for JS Classes)
 let MyClass = "PascalCase"; // Valid identifier
 let UserAccount = "class name style"; // Valid identifier
 function My() {  return "constructor"; } // Valid identifier

 // 3.snake_case (not standard for JS but used in other languages)
    let my_variable = "snake_case"; // Valid identifier
    let total_amount = 99.99; // Valid identifier
    let is_available_in = true; // Valid identifier

    // screaming_snake_case (not standard for JS but used in other languages)
    const MY_VARIABLE = screaming; // Valid identifier
    const TOTAL_AMOUNT = 99.99; // Valid identifier
    const API_KEY = "abc123"



