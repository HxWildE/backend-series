const fs = require("fs/promises");

async function main() {
  await fs.appendFile("log.txt", "login event\n");
  console.log("append complete");
}

main();

/*
Notes:
- `fs.appendFile` adds bytes to the end of an existing file.
- It also returns a Promise that resolves when data is flushed.
- Use it for log-like or incremental writes.
- If the file does not exist, Node creates it.
- Works well with text data and utf8 strings.
*/