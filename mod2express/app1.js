
//mini APi using Express Server

const express = require("express")
const app = express()

let users=[
{
 id:1,
 name:"Harsh"
},
{
 id:2,
 name:"Rahul"
}
]

app.listen(3000,()=>{
    console.log("server running")
})
//Server starts to listen requests

//Homepage Route -- Landing page
app.get("/",(req,res)=>{

    res.send("Hello backend")
})

//route to Get all Users
app.get("/users",(req,res)=>{

    res.json(users)
})

//route to get single User data
app.get("/users/:id",(req,res)=>{

 const id=req.params.id   //extracting wuery parameters

 const user=users.find(
   u=>u.id==id
 ) //finding that user

 res.json(user)

})

// users/:id  ---> such ":" parameters point to 
//           ^
//           dynamic value

