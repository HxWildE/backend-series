const fs = require("fs");

fs.readFile("a.txt", () => {
    //runnign this callback in poll phase

  setTimeout(() => {
    console.log("timeout");
  }, 0);

  //pushed to timer callback (Register) 

  setImmediate(() => {
    console.log("immediate");
  });
  //pushed to immediate(CHECK) callback 
  //toh poll se bahar nika =l ke ye pehle check hua so print pehle 

});


//Inside poll callback:

// setTimeout(...)
// setImmediate(...)

// Now:

// timeout goes to timers queue
// immediate goes to check queue
// Step 3

// Poll phase ends.

// Next phase after poll:
// CHECK phase 