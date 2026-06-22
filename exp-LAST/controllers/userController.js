const asyncHandler=
require("../middlewares/asyncHandler")


const ApiError=
require("../utils/ApiError")


const userService=
require("../services/userService")

//EXPRESS MEIN CONTROLLER 
//WO PART HO JO HTTP SE DEAL KRTA H
//RES.JSON() RES.STATSU() ETC SAB YHI HOTA H 
//HTTP KO RESPONSE YHI SE MILTA HAI 

// GET ALL


exports.getUsers=

asyncHandler(async(req,res)=>{

const users=
await userService.getAllUsers()

res.status(200)
.json({

success:true,
data:users
})

})


// GET ONE

exports.getUser=

asyncHandler(async(req,res)=>{

const user=
await userService.getUserById(req.params.id)

if(!user){
throw new ApiError(
404,
"User not found"
)
}

res.json({

success:true,

data:user

})
})





// CREATE



exports.createUser=


asyncHandler(async(req,res)=>{
const user=
await userService.createUser(
req.body
)

res.status(201)
.json({

success:true,

data:user

})


})