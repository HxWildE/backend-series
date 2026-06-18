console.log("1");

Promise.resolve().then(() => {
  console.log("\n2");
});         //pushed hanler to mtq here only

console.log("3");

console.log("promise object ");

const p = new Promise((resolve,reject)=>{
    resolve(9);
})

console.log("3");

p.then((data)=>{
    console.log(data)
})      //pushed to mtq 
