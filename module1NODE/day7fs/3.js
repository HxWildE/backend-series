const fs = require('fs')

fs.writeFile("a.txt", "Hello bacchon", (err) => {
  console.log("done");
});

//returns done when written down 
// Existing file?
// OLD DATA
// NEW
// ⚠️ Entire content overwritten.

//fs.writeFile(path,data,callback)

// open file
// ↓
// truncate old content
// ↓
// write new content
// ↓
// close file
// ↓
// callback

