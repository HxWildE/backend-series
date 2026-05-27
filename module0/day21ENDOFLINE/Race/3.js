let p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("A done");
    resolve("A");
  }, 3000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("B failed");
    reject("FAIL");
  }, 1000);
});

Promise.race([p1, p2])
  .then(console.log)
  .catch(console.log);

console.log("END");

//race says "first settled result decides MY outcome"
//Adone aaya but A nhi