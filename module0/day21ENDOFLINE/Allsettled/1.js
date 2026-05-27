// Promise.allSettled
// Never fail fast.Always wait for everyone
// "I don't care who fails.
//  Give me COMPLETE report of everyone."

let p1 = Promise.resolve("A");

let p2 = Promise.reject("FAIL");

let p3 = Promise.resolve("C");


Promise.allSettled([p1, p2, p3])
  .then(console.log);
//   .catch(console.log) --uncomment to see 

// allSettled itself NEVER rejects. so catch() is unneccesary

// Because:
// its entire purpose is:
// “collect all outcomes.”