// . unlink() -> Delete file.
const fs = require('fs')
fs.unlink("a.txt", (err) => {
  console.log("deleted");
});

// Result:  a.txt removed
