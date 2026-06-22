const auth=(req,res,next)=>{


const token=req.headers.authorization;



if(token==="Bearer 12345"){


next();


}
else{


res.status(401)
.json({

success:false,
message:"Unauthorized"

})


}


}


module.exports=auth;