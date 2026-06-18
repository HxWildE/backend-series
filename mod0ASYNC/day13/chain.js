Promise.resolve()
   .then(() => {
      console.log(1);
   })
   .then(() => {
      console.log(2);
   });

console.log(3);


//next paert is about about no return
//undefined is asssigned to the promise as a value
Promise.resolve(5)
   .then((v) => {
      console.log(v);
   })
   .then((v) => {
      console.log(v);
   });