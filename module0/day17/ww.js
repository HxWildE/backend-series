async function inner() {
   console.log("INNER START");

   await Promise.resolve();

   console.log("INNER END");
}

async function outer() {
   console.log("OUTER START");

   await inner();

   console.log("OUTER END");
}

outer();

console.log("GLOBAL");