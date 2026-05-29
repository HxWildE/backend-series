const fs = require("fs");

setImmediate(() => {
  console.log("IMMEDIATE");

  Promise.resolve().then(() => {
    console.log("PROMISE INSIDE IMMEDIATE");
  });
});

setTimeout(() => {
  console.log("TIMER");

  Promise.resolve().then(() => {
    console.log("PROMISE INSIDE TIMER");
  });

}, 0);

fs.readFile(__filename, () => {
  console.log("FILE");

  Promise.resolve().then(() => {
    console.log("PROMISE INSIDE FILE");
  });
});
