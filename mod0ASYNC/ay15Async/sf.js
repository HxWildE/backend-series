
async function test() {
   let x =  await 5;
   // let y = await 7;
//    console.log(x);

// return x   
// ----------------- uncomment this to see changes
}

console.log(test())
setTimeout(() => console.log(test().then(console.log)), 1000);

