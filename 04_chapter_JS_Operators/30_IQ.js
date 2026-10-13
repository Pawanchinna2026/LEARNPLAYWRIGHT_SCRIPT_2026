let environment="staging";
let baseUrl= environment == "pawan" ? "https://api.example.com" : "https://stagging-api.example.com";
console.log(baseUrl);
