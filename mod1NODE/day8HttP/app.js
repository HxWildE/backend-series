const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

    const details = [
        "Hello from server!",
        "",
        "Request details:",
        `  url        : ${req.url}`,
        `  method     : ${req.method}`,
        `  httpVersion: ${req.httpVersion}`,
        // 
        ,
        "Love u 3000"
    ].join("\n");

    res.end(details);

    // callback runs for every request that arrives
    // req/response HTTP model pr kaaam krta hai
//     res.end("done") ka matlab console mein "done" print nahi hota.
// Ye client/browser ko send hota hai.

});

server.listen(3000);
