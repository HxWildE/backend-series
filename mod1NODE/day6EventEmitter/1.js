// Node ke built-in events module se EventEmitter class laaye.
const EventEmitter = require("events");

// Ek EventEmitter object create kiya.
const emitter = new EventEmitter();
// Ab iske paas methods hain:
// emitter.on(...)
// emitter.emit(...)

emitter.on("hello", () => {
    console.log("Hello");
});

emitter.emit("hello");
emitter.on("hello", () => {
   console.log("A");
});

emitter.emit("hello");
console.log("B");

// console.log(emitter)

/*  emit("x")
internally kuch aisa:
listeners = {
   x: [fn1, fn2, fn3]
}
for (let fn of listeners["x"]) {
   fn();
}   
   */


// EventEmitter callbacks are: SYNCHRONOUS
