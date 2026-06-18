// Node ke built-in events module se EventEmitter class laaye.

const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.once("login", () => {
   console.log("Welcome");
});

emitter.emit("login");
emitter.emit("login");
emitter.emit("login");

// Kabhi kabhi event sirf ek hi baar handle karna hota hai.
// Uske baad listener automatically remove.
// Pehli emit ke baad khud remove.

