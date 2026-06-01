const fs = require("fs/promises");

async function main() {
  await fs.writeFile("a.txt", "hello from fs/promises\n");
  console.log("write complete");
}

main();

/*
Notes:
- `fs.writeFile` resolves when the write is finished.
- It overwrites the target file by default.
- Always provide a string or Buffer, not a plain object.
- For JSON, stringify before writing.
- This is the promise-based replacement for callback `fs.writeFile`.
*/