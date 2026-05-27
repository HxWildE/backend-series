// //promise.any "First SUCCESS wins."
// First fulfilled wins
// (rejections ignored)

let p1 = Promise.reject("FAIL 1");

let p2 = new Promise((resolve) => {
  setTimeout(() => resolve("SUCCESS"), 2000);
});

Promise.any([p1, p2])
  .then(console.log)
  .catch(console.log);

//   Because: SUPER IMPORTANT
// any ignores failures until:

// one succeeds (EVEN LATE)
// OR
// everyone fails