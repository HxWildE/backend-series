
async function test() {
   let x = await 5;
   // let y = await 7;
   console.log(x);
   return x;
}

test()
const p = test().then((x)=>{return x*2;});


console.log("sfs")

console.log(p)

setTimeout(()=>{console.log(p)},2000); //callbakc q late chlke fulfilled state dikha degi