const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{

res.setHeader(
    "Content-Type",
    "application/json"
);

if(req.method==="GET" && req.url==="/users"){

fs.readFile(
"users.json",
"utf-8",
(err,data)=>{

const users = JSON.parse(data);

res.end(JSON.stringify(users));

});

}

else if(req.method==="POST" && req.url==="/users"){

let body="";

req.on("data",(chunk)=>{
    body += chunk;
});

req.on("end",()=>{

const newUser = JSON.parse(body);

fs.readFile(
"users.json",
"utf-8",
(err,data)=>{

const users = JSON.parse(data);
users.push(newUser);

fs.writeFile(
    "users.json",
    JSON.stringify(users),
    (err)=>{

res.statusCode=201;

res.end(JSON.stringify({
    message:"user saved"
}));

});

});

});

}

else{
res.statusCode=404;

res.end(JSON.stringify({
message:"not found"
}));

}
});

server.listen(3000);