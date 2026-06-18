try {
  console.log("A");

  throw new Error("FAILED");

  console.log("B");
}
catch(err) {
  console.log("CAUGHT");
}

console.log("END");

// try/catch catches synchronous throws

// VERY IMPORTANT.