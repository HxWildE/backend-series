    const http = require("http");

    const server = http.createServer((req,res)=>{

        console.log("request");

        res.end("done");

    });


    console.log("before");
    server.listen(3000);
    console.log("after");