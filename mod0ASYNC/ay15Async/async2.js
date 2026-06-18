async function test() {

   console.log("A");
   let value = await p;
   console.log(value);
   console.log("B");
}

const p = Promise.resolve(10);
test();

console.log("outside");
