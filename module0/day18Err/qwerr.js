async function x() {
  try {
    console.log("A");

    await Promise.reject("ERR");

    console.log("B");
  } catch (e) {
    console.log("C");
  }

  console.log("D");
}

x();

console.log("END");