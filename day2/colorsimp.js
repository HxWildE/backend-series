const colors = require("colors");
const us = require("./user")

console.log("Backend Journey".green);

//user ko import kiya
console.log(us.name.cyan)

//find fucn of arrays
const numbers = [1, 2, 3, 4];
const found = numbers.find((n) => n === 3);

console.log("\n",found);

