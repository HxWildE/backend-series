const p = new Promise((resolve,reject)=>{

//    resolve("fsf");
   reject("Something went wrong");

});

p.catch((err)=>{
   console.log(err);
});