
//promise all
//failure handling + behaviour

let p1 = Promise.resolve(1);

let p2 = Promise.reject("FAILED");

let p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then(console.log)
 .catch(console.log);

// As soon as ONE fails:

// Promise.all => rejects immediately
// It does NOT wait for others.
// This behavior is called:
// “fail fast”

//promise avoids sequential wait of promises 
//rather we can o parallel wait of all and save time 

// let [a, b, c] = await Promise.all([
//   fetchA(),
//   fetchB(),
//   fetchC()
// ]);

// OVER this

// let a = await fetchA();
// let b = await fetchB();
// let c = await fetchC();

// A + B + C time SE BETTER Max(A,B,C) TIME

// Promise.all([p1, p2]) does NOT make them parallel.
// They were already running. Promise.all merely OBSERVES them together.
// Very important distinction.