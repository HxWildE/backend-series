
setTimeout(() => {
      console.log("done");
   }, 2000);  //cb


const p = new Promise((resolve) => {

   setTimeout(() => {
      resolve("done");
      console.log("resolveed")
   }, 2000);        //cb 

});

p.then(() => {
   console.log("A");
});     //mtq

console.log("B");