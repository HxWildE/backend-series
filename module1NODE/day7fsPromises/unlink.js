const fs = require("fs/promises");

async function main() {
  await fs.unlink("old.txt");
  console.log("old.txt deleted");
}

main();

/*
Notes:
- `fs.unlink` deletes a file and returns a Promise.
- Use it to remove temporary files or old uploads.
- If the file does not exist, it rejects with an error.
- Wrap it in `try/catch` for safe cleanup.
- This is the promise-based alternative to callback `fs.unlink`.
*/