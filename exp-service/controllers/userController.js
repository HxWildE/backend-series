const users = require("../data/users");
const userService = require("../services/userService")

// GET ALL USERS

exports.getUsers = (req,res,next)=>{
    
try{
    const users = userService.getAllUsers();
    res.json({
        success:true,
        data:users
    });

} //error handle krne k liye try catch me daala 
catch(error){
    next(error); 
    //catch me next(error) se errorhandler automatically 
    //  call nhi  hojata 
    //instead we jump to the nearest err handler 
    //currently jo ki error middleware mein
    //next hep us toreach there
    //PRODUCTION ME PROMISE HANDLING HOTI HAI
    }
};
        //array of users  
// GET SINGLE USER

exports.getUser = (req,res)=>{

    const id = Number(req.params.id);
    const user = userService.getUser(id);

    if(!user){
        return res.status(404).json({
            success:false,
            message:"User not found"
        });
    }

    res.json({
        success:true,
        data:user
    });
};

// CREATE USER
exports.createUser = (req,res)=>{

    const newUser = {
        id:users.length+1,
        name:req.body.name,
        age:req.body.age
    } //created user is same as this

    const name = newUser.name;
    const age = newUser.age;

//JUST CHECKING IF WE GOT BOTH NAME/AGE
//and if both are of Valid formats
if(!name || !age){
return res.status(400).json({

    success:false,
    message:"Name and age required"

    });
 } 
 //validation 
//CHECKING IF THE DATA IS VALID ACCORDING TO FORMAT 
//INVALID DATA : PHONENUMBERS ME "CF" CHAR POST KRDIA
//SO VALIDATING DATA IS IMPORTANT
//production me Zod se Hoga

if(typeof name !== "string"){

return res.status(400).json({

success:false,
message:"Name must be string"

});
} //NAme type invalid

if(typeof age !== "number"){
    return res.status(400).json({
        success:false,
        message:"Age must be string"
    })
} //Age type invalid


    const createdUser = userService.addUser(newUser);

res.status(201).json({

    success:true,
    message:"User created successfully",

    data:createdUser  //{json object hai new user ka}

});  //SENDING A STRUCTURED RESPONSE 
    
};
// UPDATE USER




exports.updateUser = (req,res)=>{

    const id = Number(req.params.id);
    const user = users.find(
        u=>u.id===id
    );

    if(!user){

        return res.status(404).json({
            message:"User not found"
        });

    }


    user.name = req.body.name || user.name;

    user.age = req.body.age || user.age;


    res.json(user);


};




// DELETE USER

exports.deleteUser = (req,res)=>{


    const id = Number(req.params.id);


    const index = users.findIndex(
        u=>u.id===id
    );


    if(index===-1){

        return res.status(404).json({
            message:"User not found"
        });

    }


    users.splice(index,1);


    res.json({
        message:"deleted"
    });


};