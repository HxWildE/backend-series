const fs = require('fs')
const path = require('path')

const ws = fs.createWriteStream(path.join(__dirname,"big.txt"));
ws.write("Hello");
ws.write(" World");

console.log(ws.listenerCount())

ws.end();

ws.on("")

// JS
//  ↓
// Writable Stream
//  ↓
// File

// Data IN jata hai.
// const ws = fs.createWriteStream("output.txt");
// Writable stream = destination.