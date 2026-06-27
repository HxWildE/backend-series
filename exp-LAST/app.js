const express=require("express")
const config=require("./config/config")
const app=express()
const cors = require('cors')
app.use(express.json())
app.use(cors())

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
//SERVER STARTS here 
console.log(
`server running ${config.PORT}`
)

}

)

//CORS --CROSS  ORIGIN RESOURCE SHARING
// Behind the scenes:

// Ye middleware har response me header add karta hai:

// Access-Control-Allow-Origin: *
// Meaning:
// "Any orIgin allowed."

// Example:
// Request:GET /users

// Origin: http://localhost:5173

// Express:

// Response:
// Access-Control-Allow-Origin: *
// Browser:allowed.

//EXMPALE FOR ALLWONING SPECIFIC FRONTENDS WITH RESTRICTED METHODS

// const allowed = [
//  "https://app.com",
//  "https://admin.app.com"
// ]


// app.use(cors({
//  origin: allowed,
//  methods:[
//   "GET",
//   "POST"
//  ]

// }))