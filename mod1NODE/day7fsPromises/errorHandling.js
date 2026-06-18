const fs = require("fs/promises");

async function main() {
  try {
    const data = await fs.readFile("abc.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.log("read failed:", err.message);
  }
}

main();

/*
Notes:
- Promise-based fs errors are handled with `try/catch`.
- `await` pauses the async function, not the whole Node process.
- Other requests and timers continue while the read is pending.
- This is the modern replacement for `if (err) {}` callbacks.
- Keep error handling close to the awaited operation.
*/