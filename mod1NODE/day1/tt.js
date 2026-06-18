setTimeout(() => {
  console.log("timer1");

  Promise.resolve().then(() => {
    console.log("promise1");
  });

}, 0);

setTimeout(() => {
  console.log("timer2");
}, 0);

// #Very IMPORTANT
// microtask queue is drained
// NOT only between phases
// but even between DIFF individual callbacks OF SAME QUEUE
// both callbacks belong to SAME timers queue

// Node DOES NOT immediately execute:
// timer2 callback
// FIRST:   microtasks drained
// So:
// promise1  prints.

//EPTH FLOW OF EVLOOP
// take one callback
// ↓
// run it completely
// ↓
// drain nextTick queue
// ↓
// drain microtask queue
// ↓
// take next callback