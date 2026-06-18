//goto /products?id=101 route on loclhost 3000

const http = require("http");
const server = http.createServer((req,res)=>{
    // URL ko parse karna
    const myUrl = new URL(
        req.url,
        `http://${req.headers.host}`
    );

    console.log("pathname:" ,myUrl.pathname);
    console.log("query id:", myUrl.searchParams.get("id"));

    if(req.method==="GET" && myUrl.pathname==="/products"){

        const id = myUrl.searchParams.get("id");

        if(id){
            res.end(`Product with id ${id}`);
        }
        else{
            res.end("All products");
        }
    }
    else{
        res.statusCode=404;
        res.end("Route not found");
    }

});

server.listen(3000);

// URL module isliye use karte hain.

// Ye tod deta hai:  products?id=101
// into:
// pathname: /products
// query: id=101

// myUrl.pathname gets us route
// myUrl.searchParams.get("id")brings us query data

// Route decide hota hai pathname se.
// Data/filter/query query params se.

// new URL(
// "/products?id=101",
// "http://localhost:3000"  => yhi h wo req header HOST
// )

// JS internally bana deta hai:
// http://localhost:3000/products?id=101

// Ab parse kar sakta hai:
// myUrl.pathname
//     ↓
//   /products
