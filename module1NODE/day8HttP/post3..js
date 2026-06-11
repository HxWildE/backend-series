const http = require("http")

const server = http.createhttpServer((req,res)=>{

    console.log("running!");

    var users = {
        id:1,
        name:"Shubhi"
    }

    if(req.method==="/GET" && req.url === "/users" ){
        
    }
});