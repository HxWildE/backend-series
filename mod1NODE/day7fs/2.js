//use node "filename.js" to run on terminal
//path resolvign ki dikkat hoti h verna 

// fs.readFile(path, encoding, callback)

const fs = require("fs");

fs.readFile("sample.txt", "utf8", (err, data) => {
  console.log(data);
});

// fs.readFile("abc.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log(data);
// });

// { <Buffer 48 65 6c ...>}
// File = bytes , Node returns Buffer.

//backend use way 

const path = require("path");

const filePath = path.join(
  __dirname,
  "sample.txt"
);

fs.readFile(
  filePath,
  "utf8",
  (err, data) => {
    console.log(data);
  }
);

// Error: ENOENT: no such file or directory

// console.log(process.cwd())
//return current working directory

// Node
//  ↓
// libuv
//  ↓
// OS request
//  ↓
// read bytes from disk
//  ↓
// callback queue
//  ↓
// event loop
//  ↓
// callback execute

// With:

// "utf8"

// Node bytes → string convert kar deta hai.