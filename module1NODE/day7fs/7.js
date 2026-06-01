// 8. mkdir() -> Create folder.
const fs = require('fs')

fs.mkdir("uploads", (err) => {});

// Result:
// uploads/
// Nested folders

fs.mkdir(
  "a/b/c",
//   { recursive: true }, uncomment it to see this work
  () => {}
);

// Result:
// a
//  └─ b
//      └─ c

// Without recursive:
// a must exist and b must exist

// With recursive:

// a missing?create
// b missing?create
// c missing?create