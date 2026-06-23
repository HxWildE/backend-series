
function auth(req,res,next){
    
    console.log(`Hello correct User ,Your request is being processed!!`);

    next()
}

module.exports = auth;