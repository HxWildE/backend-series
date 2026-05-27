//variation of 1 to show resolve reject dont matter
//first settle ment matters


let p1 = new Promise((resolve) => {
  setTimeout(() => resolve("A"), 3000);
});

let p2 = new Promise((resolve,reject) => {
  setTimeout(() => reject("B"), 1000);
});

Promise.race([p1, p2])
  .then(console.log)
  .catch(console.log);