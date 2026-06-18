const fs = require("fs/promises");

async function main() {
  const data = await fs.readFile("config.json", "utf8");
  const config = JSON.parse(data);
  console.log("port:", config.port);

  const users = [{ id: 1, name: "Harsh" }];
  await fs.writeFile("users.json", JSON.stringify(users, null, 2));
  console.log("users.json written with pretty JSON");
}

main();

/*
Notes:
- Read JSON with `fs.readFile` + `JSON.parse`.
- Write JSON with `JSON.stringify` before `fs.writeFile`.
- `JSON.stringify(..., null, 2)` creates pretty formatted output.
- Files store bytes, so JS objects must be serialized first.
- This is a common backend pattern for config and data files.
*/