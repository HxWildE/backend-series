const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");


// middleware
app.use(express.json());
app.use(logger);

// routes
app.use("/users",userRoutes);

//error handler
//placed always after routes taki next(error)
//brings them to nearest err handle middleware
app.use(errorHandler);

app.listen(3000,()=>{

console.log("server running");

});