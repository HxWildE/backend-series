const express = require("express")
const app = express()

app.use((req,res,next)=>{
    console.log("middleware running")
    next()
})
//no route given -- Global middleware sab pr apply hogi

app.get("/",(req,res)=>{
    res.send("home")
})

app.listen(3000)

// Middleware ek function hai jo request
//  aur response ke beech me execute hota hai.
//app.use() me middlewares hote hain 

// next() kya hai? Ye sabse important.
// Middleware ko control pass karna hota hai.

//if next not written to ,Browser loading karta rahega.
// Request
//  |
// Middleware
//  |
// (stuck)

