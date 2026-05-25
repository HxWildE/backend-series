async function test() {
  throw new Error("boom");
}

async function run() {
  try {
    await test();
  } catch (err) {
    console.log(err.message);
  }
}

run();