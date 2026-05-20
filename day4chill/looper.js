setTimeout(() => {
  console.log("timeout");
}, 0);
//non blocking nature Les go 

for (let i = 0; i < 10000000000; i++) {}
//blocking yehi wait krwara hai

console.log("done");

console.log("start");

for (let i = 0; i < 1000000000; i++) {}

setTimeout(() => {
  console.log("timeout");
}, 0);

console.log("end");

