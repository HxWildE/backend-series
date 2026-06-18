const fs = require("fs/promises");

async function main() {
  const p1 = fs.readFile("a.txt", "utf8");
  const p2 = fs.readFile("b.txt", "utf8");
  const p3 = fs.readFile("c.txt", "utf8");

  const results = await Promise.all([p1, p2, p3]);
  console.log(results);
}

main();

/*
Notes:
- `Promise.all` starts multiple reads in parallel.
- This is faster than sequential `await` for independent operations.
- Each `fs.readFile` returns a Promise immediately.
- If any file rejects, `Promise.all` rejects too.
- Great for backend tasks that can run concurrently.
*/