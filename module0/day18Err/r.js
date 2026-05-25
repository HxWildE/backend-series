async function test() {
  try {
    Promise.reject("FAILED");
  } catch (e) {
    console.log("CAUGHT");
  }
}

test();