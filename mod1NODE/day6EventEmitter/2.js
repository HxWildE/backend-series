const EventEmitter = require("events");
const emitter = new EventEmitter();

// console.log(emitter)
//OBJ/ARG PASSING EITH EVEENTS

emitter.on("x", (n) => {
   console.log(n);
});

emitter.emit("x", 1);
emitter.emit("x", 2);

emitter.on("sum", (a, b) => {
   console.log(a + b);
});

emitter.emit("sum", 10, 20);