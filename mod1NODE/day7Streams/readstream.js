const fs = require('fs')
const path = require('path')

const rs = fs.createReadStream(path.join(__dirname,"big.txt"))
console.log(rs)

rs.on("data", chunk => {
  console.log(chunk);
});

// Data OUT aata hai.
// rs =Readable Stream.

// Output: chunk me buffers aate h

// <Buffer ...>
// <Buffer ...>
// <Buffer ...>
// <Buffer ...>
// Har chunk alag aata hai.

rs.on("end", () => {
  console.log("Finished");
});

rs.on("error", err => {
  console.log(err);
});
fs.createReadStream()

// Flow:

// Disk
//  ↓
// 64KB
//  ↓
// 64KB
//  ↓
// 64KB