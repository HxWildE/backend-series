const fs = require("fs/promises");

async function main() {
  const data = await fs.readFile("a.txt", "utf8");
  console.log(data);
}

main();

/*
Notes:
- `fs.readFile` returns a Promise instead of taking a callback.
- Use `await` to pause the current async function until data is ready.
- The returned value is raw file contents, often a string with utf8.
- Errors are handled with `try/catch` around the `await` call.
- Same underlying filesystem work happens, but the interface is cleaner.
*/