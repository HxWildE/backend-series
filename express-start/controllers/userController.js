const users = require("../data/users");

// GET ALL USERS

exports.getUsers = (req,res)=>{
    res.json(users);
};



// GET SINGLE USER

exports.getUser = (req,res)=>{


    const id = Number(req.params.id);


    const user = users.find(
        u=>u.id===id
    );


    if(!user){

        return res.status(404).json({
            message:"User not found"
        });

    }


    res.json(user);


};



// CREATE USER

exports.createUser = (req,res)=>{


    const newUser = {

        id:users.length+1,

        name:req.body.name,

        age:req.body.age

    };


    users.push(newUser);


    res.status(201).json(newUser);


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