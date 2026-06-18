// Promise.race
//"Whoever finishes first wins."

// Not:
// success first. or all finish.
// Just:
// FIRST settled promise wins ->Resolve OR reject.

let p1 = new Promise((resolve) => {
  setTimeout(() => resolve("A"), 3000);
});

let p2 = new Promise((resolve) => {
  setTimeout(() => resolve("B"), 1000);
});

Promise.race([p1, p2])
  .then(console.log)
  
  //race stills wait doenst canel p1 as p2 gets settled
//   Race does NOT stop losers.

//used exclusively in Timeouts.

// Example:

// Promise.race([
//   fetchData(),
//   timeoutPromise()
// ])

// Whichever finishes first wins.
// This is how MANY backend timeout systems work conceptually.