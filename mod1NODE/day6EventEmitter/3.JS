const EventEmitter = require("events");

const emitter = new EventEmitter();

console.log("1");

emitter.on("x", () => {
    console.log("2");
});

console.log("3");

emitter.emit("x");

console.log("4");

console.log("_________________________\n")

emitter.on("order", (id, item) => {
    console.log(id, item);
});

emitter.emit("order", 101, "Pizza");