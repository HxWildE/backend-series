const userslist = require("../data/users");

    function getUsers(){
        const users = userslist;
        return users;
    }


    function createUser(data){
        
        userslist.push(data);
        return data;

    }

    function getUser(id){
        return userslist.find((x) => x.id === id) || null;
    }

    //put request full update a user

    function updateUser(id, updates){

        const index = userslist.findIndex((x) => x.id === id);
        if (index === -1) return null;
        userslist[index] = { ...userslist[index], ...updates, id };
        return userslist[index];

    }

    function delUser(id){

        const index = userslist.findIndex((x) => x.id === id);
        if (index === -1) return null;
        return userslist.splice(index, 1)[0];

    }

//simple actual input output funcs
module.exports = {
    getUsers,
    createUser,
    getUser,
    updateUser,
    delUser,
}                   

