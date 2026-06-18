const http = require("http");
//a simple server

const server = http.createServer((req,res)=>{

    if(req.url==="/"){
        res.end("Home Page");
    }
    else if(req.url==="/about"){
        
        res.end("About Page");
    }
    else if(req.url == "/author"){
        res.setHeader(
            "Content-Type","application/json"
        )
        res.end("About the Author \n" + JSON.stringify({
            name:"Harsh",
            age:20
            })
        );    
    }
    else{
        res.statusCode=404;
        res.end("Not Found");
    }

});


server.listen(3000);

//DifferenT URL/Paths leads to different paths