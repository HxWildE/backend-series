let p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("A done");
    resolve(10);
  }, 2000);
});

let p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("B done");
    resolve(20);
  }, 1000);
});

Promise.all([p1, p2])
  .then((res) => {
    console.log("RESULT:", res);
  });

console.log("END");