let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(3);

//all masterclass

Promise.all([p1, p2, p3])
  .then((values) => {
    console.log(values);
  });

  
// Promise.all creates:
// “A NEW promise that watches ALL promises.”
// Like supervisor.
// Wait for ALL promises.
// If ANY fails → whole thing fails.” --not important

// Result order depends on ARRAY POSITION.
// NOT completion timing.

let p1 = new Promise(r => setTimeout(() => r("A"), 3000));
let p2 = new Promise(r => setTimeout(() => r("B"), 1000));

Promise.all([p1, p2]).then(console.log);

//   important conclusion
    // \
    //  \
    //  \/

// Promise.all controls RESULT aggregation.
// NOT execution lifecycle.
// “It STARTS watching all.
// But rejects immediately on first failure.”