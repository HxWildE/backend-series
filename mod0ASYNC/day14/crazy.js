const p = Promise.resolve(
            Promise.resolve(
                Promise.resolve(10)
            )
        )
console.log(p)

const p1 = p.then((v)=>v*2); //registered still pending
console.log(p1)             //sync func to stack khali nhi 

setTimeout((v)=>{
    console.log(p1)
},1000)

const p2 = p1.then((v)=>v*2); //registered still pending
setTimeout((v)=>{
    console.log(p2)
},1000)