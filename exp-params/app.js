const express = require("express");

const app = express();

app.use(express.json());


const users = [
    {
        id:1,
        name:"Harsh",
        city:"Kanpur"
    },
    {
        id:2,
        name:"Rahul",
        city:"Delhi"
    },
    {
        id:3,
        name:"Aman",
        city:"Delhi"
    }
];



// Route Params
app.get("/users/:id",(req,res)=>{


    const id = req.params.id;


    const user = users.find(
        (u)=> u.id == id
    );


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


});





// Query Params
app.get("/users",(req,res)=>{

    const {city} = req.query;
    let result = users;

    if(city){

        result = users.filter(
            (u)=>u.city == city
        );

    }

    res.json({

        success:true,
        data:result

    });


});


app.listen(3000,()=>{

console.log("server running");

});