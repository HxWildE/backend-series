Promise.resolve(1)
.then((x) => {
  console.log("A");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(999);
    }, 2000);
  });
})
.then((v) => {
  console.log(v);
});

// Promise.resolve(1)
// .then((x) => {
//   console.log("A");

//   return new Promise.resolve(3)
//   .then((x5)=>{
//     return 34+x;
//   })

// })