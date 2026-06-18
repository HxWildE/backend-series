async function a() {
   console.log("A1");

   await b();

   console.log("A2");
}

async function b() {
   console.log("B1");

   await Promise.resolve();

   console.log("B2");
}

console.log("START");

a();

Promise.resolve().then(() => {
   console.log("MICROTASK");
});

console.log("END");