setTimeout(() => {
  console.log("timer");
}, 0);

//change time to 1s an see the difference
setImmediate(()=>{
    console.log("check phase")
})

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end");