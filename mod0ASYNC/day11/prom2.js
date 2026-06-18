//states of promises

const p = new Promise((resolve, reject) => {

  resolve("A");

  reject("B");

  resolve("C");

});
//a hit krte hi fulfilled state so no change then 

//prom cocnstructor called immediately
const p = new Promise(() => {
  console.log("Inside");
});

console.log("Outside");
