console.log("A");

const p = new Promise((resolve) => {
  console.log("B");
  resolve();
});

p.then(() => {
  console.log("C");
});

console.log("D");

const p1 = Promise.resolve();
p1.then(()=>{
    console.log("resolved")
});