// 5. appendFile() :Add content at end of file
// Instead of:
// start writing from byte 0
// Node says: jump to end and write there

const fs = require("fs");

fs.appendFile(
  "a.txt",
  "\nUser Logged In",
  (err) => {}
);

// Before: Start 

// After:
// Start
// User Logged In

// Used heavily for:

// logs , audit trails , analytics

// BTS

// Not:   erase every byte

// Usually OS does:
// remove file entry
// mark blocks reusable
// Hence delete fast hota hai.