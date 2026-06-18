const http = require("http");

const server = http.createServer((req,res)=>{
    console.log("running")

if(req.method==="POST" && req.url==="/users"){

let body="";

req.on("data",(chunk)=>{
    body += chunk;

});


req.on("end",()=>{

    console.log(req.method + "\n" + req.url + body);
    // const data = JSON.parse(body);
    res.end("User created with details !!");

});


    }
});

server.listen(3000);

// Data aaya:
// req.on("data")

// multiple times:
// {
// "name":

// then:
// "Harsh"
// }

// Jab pura data aa gaya:
// req.on("end")  runs.

// Ab body contains:
// {
// "name":"Harsh",
// "age":20
// }
