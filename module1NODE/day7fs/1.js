// Sync

const data = fs.readFileSync("a.txt", "utf8");
console.log(data);
console.log("END");

// Execution:
// read file
// print data
// END

// Thread wait karega.

// Async

fs.readFile("a.txt", "utf8", (err, data) => {
  console.log(data);
});

console.log("END");

// Output:
// END
// file content
// Node wait nahi karta.