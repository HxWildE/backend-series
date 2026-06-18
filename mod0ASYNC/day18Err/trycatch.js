async function test() {
  try {
    await Promise.reject("FAILED");
  } catch (e) {
    console.log("CAUGHT:", e);
  }
}

test();