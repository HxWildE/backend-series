const fs = require('fs')

fs.stat(
  "sample.txt",
  (err, stats) => {
    console.log(stats);

    if (stats.isDirectory())   console.log("folder");
  
    if(stats.isFile()) console.log("file!! of size : ",stats.size);

  }
);

// Returns:

// Stats {
//   size: 500,
//   ...
// }

// Useful:

// stats.isFile()

// stats.isDirectory()

// stats.size

// Example:
