const p = new Promise((resolve, reject) => {
  resolve("Success");
});

const p1 = new Promise((resolve, reject) => {
  reject("Failure"); //failure
}).catch((err)=>{
    console.log(err);
})      //caught failure

const p2 = new Promise((resolve, reject) => {
  resolve("Success");
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})