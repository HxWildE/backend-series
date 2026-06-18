let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("A success");
    resolve(1);
  }, 1000);
});


let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("B failed");
    reject("ERROR");
  }, 3000);
});

Promise.all([p1, p2])
  .then(console.log)
  .catch(console.log);

console.log("END");

// allPromise watching:
// - p1
// - p2
// - p3

// CASE — ANY FAILURE
// p1 ✅
// p2 ❌
// p3 still running...

// The MOMENT p2 fails:
// allPromise rejects immediately

// BUT:
// p3 DOES NOT STOP

// Because:
// Promise.all is NOT controlling execution.

// It’s only observing.

// Promise.all behaviour
// Observe all promises simultaneously.
// Resolve when all succeed.
// Reject immediately on first failure.
// But never cancel already-running async operations.