
let somePromise = Promise.resolve(6);
let p1 = Promise.resolve(5);

let p2 = Promise.resolve(7).then(() => {
   return somePromise;
});

console.log(p1,p2,somePromise) //why p2 pending