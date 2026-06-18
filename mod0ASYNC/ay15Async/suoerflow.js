async function test() {
   console.log("A");

   await 0;

   console.log("B");
}

setTimeout(() => console.log("T"), 0);

test();

Promise.resolve().then(() => console.log("P"));

console.log("END");