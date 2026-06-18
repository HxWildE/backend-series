const http = require("http");

const server = http.createServer((req,res)=>{
    console.log("running")

if(req.method==="POST" && req.url==="/users"){

let body="";

req.on("data",(chunk)=>{
    body += chunk;

});


req.on("end",()=>{

    // const data = JSON.parse(body);
        res.setHeader(
        "Content-Type",
        "application/json"
        );

        res.statusCode = 201; //userCreate
        
        res.end(JSON.stringify({
            success:true,
            message:"API working"
        }));

    });

}
});

server.listen(3000);