class ApiError extends Error {
    
    constructor(message,statuscode){
        
        super(message);

        this.statuscode = statuscode;
        this.status = "fail";
        
    }

};

module.exports = ApiError;