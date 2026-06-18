const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const logger = require("./middleware/logger");

// middleware
app.use(express.json());
app.use(logger);

// routes
app.use("/users",userRoutes);

app.listen(3000,()=>{

console.log("server running");

});