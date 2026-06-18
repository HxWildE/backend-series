const http = require("http")

 let users = [{
        id:1,
        name:"Shubhi"
    }];

const server = http.createServer((req,res)=>{

    console.log("running!");


res.setHeader(
"Content-Type",
"application/json"
); // mark1

   
    if(req.method==="GET" && req.url === "/users"){
        res.end(JSON.stringify(users))
    }
    else if(req.method==="POST" && req.url === "/users"){

        let body = "";

        req.on("data",(chunk)=>{
            body += chunk;
        })

        req.on("end",()=>{

            const data = JSON.parse(body);
            users.push(data);
            res.statusCode = 201;

            res.end(JSON.stringify({
                success:"done registeered",
                message:"user ++"
            }))
        });    
    }

    else{
        res.statusCode= "404";
        res.end(JSON.stringify({
            message:"route not found"
         }));
    }
});

server.listen(3000);

// miiniRESTAPI this is 
