const date = require("Date")

function log(req,res,next) {
    
    const url = req.url
    const meth = req.method
    const d = new Date();
    
    console.log(`New ${meth} request arrived , url : ${meth}`)
    console.log(`at : ${d}`);

    next()
}

module.exports = log;