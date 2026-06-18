const p = new Promise((resolve) => {
  console.log("A");
  resolve();
});


p.then(() => {
  console.log("C");
});     //put this at last still same ans figure out why?

console.log("B");
