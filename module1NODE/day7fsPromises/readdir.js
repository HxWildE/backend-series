const fs = require("fs/promises");

async function main() {
  const files = await fs.readdir("uploads");
  console.log(files);
}

main();

/*
Notes:
- `fs.readdir` returns an array of file and folder names.
- The Promise resolves when directory entries are read.
- Useful for listing uploads, config folders, or static assets.
- It does not return full paths by default.
- Combine with `fs.stat` for more information if needed.
*/