// process.nextTick()
// Special Node queue.
// EVEN HIGHER priority than microtasks.

Promise.resolve().then(() => {
  console.log("promise");
});

//add any promimse/callback ,nextTick will run faster that any async callback 

process.nextTick(() => {
  console.log("tick");
});

