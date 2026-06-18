const fs = require("fs/promises");

async function main() {
  await fs.mkdir("uploads", { recursive: true });
  console.log("uploads directory created or already existed");
}

main();

/*
Notes:
- `fs.mkdir` creates a folder and returns a Promise.
- `{ recursive: true }` makes nested directories safe.
- It is useful for preparing upload or cache directories.
- If the directory exists, Node does not throw with recursive true.
- This is the promise-based version of callback `fs.mkdir`.
*/