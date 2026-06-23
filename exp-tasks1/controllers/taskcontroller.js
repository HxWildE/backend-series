const ApiError = require("../utils/apierror")
const users = require("../data/users")
const taskService = require("../services/")

function getUsers(req,res,next){
        
    const users = taskService.getUsers();
    if(!users){
        throw new ApiError("User List not found",404);
    }

    res.status(200).json({
        message:"Success",
        data: users
    })
}

function createUser(req,res,next){
    
    const data = {
        id:data.length + 1,
        name: req.params.name,
        age:req.params.age
    }

    const Createduser = taskService.createUser(data);

     res.status(201).json({
        message:"Success User Created ",
        data: users
    })

}

function getUser(req,res,next){

    const id = req.params.id;
    const users = taskService.getUser(id);
    if(!user){
        throw new ApiError("User not found",404);
    }

    res.status(200).json({
        message:"Success",
        data: user
    })
}

function updateUser(req,res,next){

        const id = req.params.id
        const name = req.params.name
        const age = req.params.age

        if(id || name || age) {
            const updatedUser = taskService.updateUser(id,name,age);
        }

        if(!updateUser){
            throw new ApiError("User not updated",400)
        }

    res.status(200).json({
        message:"Success Update user",
        data: updatedUser
    })
}

function delUser(req,res,next){
    
        const id = req.params.id

        if(id || name || age) {
            const updatedUser = taskService.delUser(id);
        }

        if(!updateUser){
            throw new ApiError(" User not deleted ",400)
        }

    res.status(200).json({
        message:"Success Update user",
        data: deletedUser
    })

}


//400 - bad request 
//401 user not found
//404 - resource not found
//500 internal error 