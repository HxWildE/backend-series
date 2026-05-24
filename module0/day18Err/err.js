async function test() {

    console.log("error")
  await Promise.reject("FAILED");
}

test();