//export kr re

// math.js

function add(a,b){
    return a+b;
}

// module.exports = add
exports.add = add
//also use exports.add = addsame results


// Then:
// require("./math")
// returns add()

// const add = require("./math");
// becomes
// const add = returned_value;