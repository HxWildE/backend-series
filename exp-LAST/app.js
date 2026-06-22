const express=require("express")
const config=require("./config/config")
const app=express()

app.use(express.json())

app.use(
"/api",
require("./routes/userRoutes")
)

app.use(
require("./middlewares/errorHandler")
)

app.listen(
config.PORT,
()=>{
//SERVER STARTS HERE

console.log(
`server running ${config.PORT}`
)

}

)

