// 7. rename()
const fs = require('fs')
fs.rename(
  "new.txt",    //oldfname
  "a.txt",          //new filename
  (err) => {
    console.log("renamed")
  }
);

// Result:

// old.txt
// ↓
// new.txt

// Used in:

// temp files
// uploads
// rotating logs


// Mostly:directory metadata update