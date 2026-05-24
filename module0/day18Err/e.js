async function test() {
  console.log("A");

  await Promise.reject("ERR");

  console.log("B");
}

// test() -->unhanled err deta h
console.log(3)
test().catch(console.log)