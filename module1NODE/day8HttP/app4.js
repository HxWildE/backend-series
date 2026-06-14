

const http = require("http");
const server = http.createServer((req,res)=>{

    if(req.url==="/" && req.method==="GET"){
    res.end("Home");
}

else if(req.url==="/users" && req.method==="GET"){
    res.end("Users");
}

else if(req.url==="/users" && req.method==="POST"){
    res.end("Create User");
}

else{
    res.statusCode=404;
    res.end("Not Found");
}

});


server.listen(3000);

//ser