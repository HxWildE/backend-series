//allSeettled tracks
// done?
// done?
// done?

// It ONLY resolves when ALL finished.
// Success OR failure both count as “finished”.

let p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("A");
    resolve(1);
  }, 3000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("B");
    reject("FAIL");
  }, 1000);
});

Promise.allSettled([p1, p2])
  .then((res) => {
    console.log(res);
  });

console.log("END");

//.then() runs only when all finished - changed state from pending
