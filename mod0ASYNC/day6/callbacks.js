function greet(name) {
  console.log("Hello " + name);
}

function processUser(cb) {
  const name = "Harsh";

  cb(name);
}

processUser(greet);

const arr = [1,2,3,4]

arr.forEach(()=>{
   console.log("x");
});