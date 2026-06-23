
const express = require('express')
const app = express()
const logger = require('./middlewares/logger')
const errorhandler = require("./middlewares/errorhandler")
const auth = require("./middlewares/auth")
const taskroutes = require("./routes/taskroutes")
//json middleware -- built in 
app.use(express.json())

//middlewares
app.use(logger)

//route middleware
app.use("/tasks",
    taskroutes)

//err
app.use(errorhandler)

//listen
module.exports = app;