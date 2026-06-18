async function x() {
   await new Promise(r => setTimeout(r, 3000));

   return 5;
}

let p = x();

console.log(p);

