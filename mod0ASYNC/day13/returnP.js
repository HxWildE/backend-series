Promise.resolve(2)
   .then((v) => {
      return v + 1;
   })
   .then((v) => {
      return v * 10;
   })
   .then(console.log);

Promise.resolve(1)
  .then(v => v + 1)    //promised resolved with value 2
  .then(v => v + 1)     //promised resolved with value 3
  .then(v => v * 5)     //promised resolved with value 15
  .then(console.log);