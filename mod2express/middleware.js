const express = require("express")
const app = express()
app.use(express.json())

app.use("/",(req,res,next)=>{
    console.log("1")
    next()
})

app.use((req,res,next)=>{
    console.log("2")
    next()
})

app.use((req,res,next)=>{

console.log(
 req.method,
 req.url
)

next()

}) //logger middleware simulation 

app.get("/",(req,res)=>{
    res.send("done")
})

app.post("/users",(req,res)=>{
console.log(req.body)
})