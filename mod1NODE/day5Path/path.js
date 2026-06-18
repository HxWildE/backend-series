const path = require("path");

const result = path.join("users", "harsh", "notes.txt");

console.log()
console.log(result);

// Path module OS differences handle karta hai.

// Why not simply?  ->"users/" + "harsh/" + "notes.txt"
// Because OS-specific separators alag ho sakte hain.
// path.join() safe hai.


console.log(
  path.basename("/users/harsh/file.txt")
);

// path.basename() fetches Path ka last part.

// path.extname() fetches Extension.
console.log(path.extname("notes.pdf"))

// Output:.pdf

// path.dirname() : Directory name.
console.log(path.dirname("/users/harsh/file.txt"))

// Output:  /users/harsh