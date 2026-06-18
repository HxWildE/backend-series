let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("A failed");
    reject("A");
  }, 1000);
});

let p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("B success");
    resolve("B");
  }, 3000);
});

Promise.any([p1, p2])
  .then(console.log)
  .catch(console.log);

console.log("END");

// Use for:
// fallback systems / redundancy.