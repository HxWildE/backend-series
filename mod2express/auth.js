const express = require("express")
const app = express()

function auth(req,res,next){

const token=req.headers.token
if(token==="abc123"){
 next()  //authoirzed hai to agle to bhejo 
}

else{

 res.status(401)
 .send("not allowed")//Reject user
}

}

app.get( "/profile", auth,       (req,res)=>{
         //url     //auth middleware           
res.send("profile")

})

// Request
//  |
// auth middleware
//  |
// token check
//  |
// route
//  |
// response