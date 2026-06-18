setTimeout(() => {
  console.log("A");

  Promise.resolve().then(() => {
    console.log("P1");
  });

}, 0);

setTimeout(() => {
  console.log("B");

  Promise.resolve().then(() => {
    console.log("P2");
  });

}, 0);