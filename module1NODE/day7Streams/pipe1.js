const fs = require("fs");

const rs = fs.createReadStream("input.txt");
const ws = fs.createWriteStream("output.txt");

rs.pipe(ws);
//readable.pipe(writable)

// Suppose:
// input.txt ko kahi bahar copy karna hai
//pipe use kro ->automatic forwarding
// Node automatically chunks forward karta rehta hai.


// input.txt
//     ↓
// Readable
//     ↓
//  pipe
//     ↓
// Writable
//     ↓
// output.txt

// Why pipe?

// Because:

// Less Memory, Less Code
// Faster , Automatic Flow Control