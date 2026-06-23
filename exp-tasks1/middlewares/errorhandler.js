
function errorhandler(err,req,res,next){

    res.json({
        message: err.message || "Error Found",
        statuscode:err.statuscode || 500,
        status:"fail"
    });
}

//next(error) brings here
//async handlers bring here


module.exports = errorhandler