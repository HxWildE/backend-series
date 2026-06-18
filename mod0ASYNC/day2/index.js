const obj1 = {
  a: 1,
  b: 2
};

const obj2 = {
  ...obj1,
  c: 3
};

console.log(obj2);
console.log(obj1);

//obj spreaing

function greet(name, callback) { //func me pass kiya
  console.log("Hello " + name);

  callback();
}

function done() {//callback banyaa
  console.log("Finished");
}

greet("Harsh", done);

console.log('\n timeout start')

setTimeout( () => {
    greet("sushil",done)
 ,3000})   //waits for 3 secs then calls greet
            //order isrupted

 console.log("timeout End")

