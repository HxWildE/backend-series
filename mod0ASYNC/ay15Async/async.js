async function test(){
   return 5;
}

console.log(test())

console.log(test().then((x)=>{console.log(x+2)}));

console.log(test().then(()=>{ return 2;}));
