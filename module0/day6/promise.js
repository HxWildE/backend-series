///AMAZING CODE TO EXPLAIN NONBLOCKING QUEUES AND MICROTASK



setTimeout(()=>{
    console.log("i just arrived at 0sec\n")
},0)

Promise.resolve(5)
   .then(x => {
      return x * 2;
   })
   .then(x => {
      console.log(x+8);
      return x;
   })

   queueMicrotask(()=>{
    console.log("I am microTask boy!!")
   })
   //WHY TIMER RAN LATE EVEN ITS A 1 SEC??

// const p = new Promise((resolve, reject) => {

//    let success = true;

//    if(success){
//       resolve("Done");
//    }else{
//       reject("Failed");
//    }

// });

const p = new Promise((resolve)=>{
   resolve("Hello");
});

p.then(data=>{
   console.log(data);
});

//blocking pehle chal gya so hello 18