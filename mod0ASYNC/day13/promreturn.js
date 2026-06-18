const p1 = Promise.resolve(10)

const p2 = p1.then(() => {});
//new promise

console.log(p1 != p2)

const p3 = p2.then(() => {}).catch((err)=>{
    console.log(err)
})

console.log(p3 != p2)




