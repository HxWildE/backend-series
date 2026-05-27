let p1 = Promise.reject("FAIL 1");

let p2 = new Promise((resolve,REJ) => {
  setTimeout(() => REJ("SUCCESS"), 2000);
});

Promise.any([p1, p2])
  .then(console.log)
  .catch(console.log);

  //REJECTS ONLY WHEN 
//  ONLY if ALL promises reject.
// Then it throws:
// AggregateError

//shows report of all errors

// // example :istributed systems fetch 
// Try fetching data from:
// - server A
// - server B
// - cache

// Whichever succeeds first:
// great.

// Failures ignored unless ALL fail.

// Very useful in distributed systems.