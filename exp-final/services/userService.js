const users = require("../data/users")

function getAllUsers(){
    return users;
}

function getUser(id){
    
    const user = users.find(
        u=>u.id===id
    );

    return user;
}

function addUser(user){
    
    users.push(user);
    return user;
}

module.exports = {
    getUser,
    getAllUsers,
    addUser
};

//service me do hi functions dale hai 
//getalluser and create new user wala (+ getuser)
//just to demonstrate

    //          Request
    //             ↓
    //           Route
    //     (URL mapping)
    //             ↓
    //        Controller
    //     (HTTP handling)
    //             ↓
    //         Service
    //    (Business logic)
    //             ↓
    //       Database
    //    (Permanent data)