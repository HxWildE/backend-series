const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.once("x", () => {
   console.log("A");
});

emitter.on("x", () => {
   console.log("B");
});

emitter.emit("x");
emitter.emit("x");