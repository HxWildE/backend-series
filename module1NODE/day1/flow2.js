const fs = require("fs");

console.log("START");

setTimeout(() => {
  console.log("TIMEOUT");
}, 0);

setImmediate(() => {
  console.log("IMMEDIATE");
});

fs.readFile(__filename, () => {
  console.log("FILE READ");
});

Promise.resolve().then(() => {
  console.log("PROMISE");
});

console.log("END");