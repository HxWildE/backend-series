var myInfo = `{
   "Name": "GFG", 
   "Age":22,
   "Department" : "Computer Science and Engineering",
   "Year": "3rd"
}`

var Obj = JSON.parse(myInfo);
console.log(Obj.Name)  
console.log(Obj.Age)

 myInfo = {
   Name: "GFG", 
   Age:22,
   Department : "Computer Science and Engineering",
   Year: "3rd"
}

Obj = JSON.stringify(myInfo);
console.log("\n",Obj)

const users = [
  {id:1,name:"Harsh"}
];

const userobj = JSON.stringify(
   users,
   null,
   1
);

console.log(userobj)

// Why stringify?
// Because file stores:
// bytes
// not JS objects.