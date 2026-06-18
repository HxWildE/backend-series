
const fs = require("fs");

fs.readFile("a.txt", () => {

  setTimeout(() => {
    console.log("timeout1");
  }, 0);

  setImmediate(() => {
    console.log("immediate1");
  });

});

//fixed output no oreder 
//illustration of phases