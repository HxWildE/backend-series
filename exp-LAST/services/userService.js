let users=

 [
   {
    id:1,
    name:"Harsh"
    }
 ]

const getAllUsers=async()=>{
return users;

}

const getUserById=async(id)=>{

const user=
users.find(
u=>u.id==id
)

return user;
}

const createUser=async(data)=>{

const user={
id:users.length+1,
name:data.name
}

users.push(user)

return user;

}

module.exports={

getAllUsers,

getUserById,

createUser

}