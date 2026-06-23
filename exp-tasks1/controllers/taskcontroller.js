const ApiError = require("../utils/apierror")
const users = require("../data/users")
const taskService = require("../services/taskService")

function getUsers(req,res,next){
        
    const users = taskService.getUsers();
    if(!user){
        throw new ApiError("User List not found",404);
    }

    res.status(200).json({
        message:"Success",
        data: users
    })
}

function createUser(req,res,next){
    
    const = 
    const Createduser = taskService.createUser();


}

function getUser(req,res,next){

}

function updateUser(req,res,next){

}

function delUser(req,res,next){

}


//400 - bad request 
//401 user not found
//404 - resource not found
//500 internal error 