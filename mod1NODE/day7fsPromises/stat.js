const fs = require("fs/promises");

async function main() {
  const stats = await fs.stat("a.txt");
  console.log("size:", stats.size);
  console.log("isFile:", stats.isFile());
}

main();

/*
Notes:
- `fs.stat` returns file metadata as a Promise.
- `stats.size` gives the file size in bytes.
- `stats.isFile()` and `stats.isDirectory()` help inspect the path.
- Useful before reading, deleting, or processing files.
- This is the async promise version of callback `fs.stat`.
*/