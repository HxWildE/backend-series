setTimeout(() => console.log("timeout"), 0);
setImmediate(() => console.log("immediate"));

// Order?
// NOT guaranteed always
// Depends on event loop timing.
