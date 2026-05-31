const a = require("./maths");
const b = require("./maths");


// Node Caching.
// First require:  require("./math")
// 1. File load karo
// 2. Execute karo
// 3. module.exports nikalo
// 4. Cache me daal do

// require("./math")
//         ↓
// Cache check
//         ↓
//     Found?
//   /      \
// yes        no
//  |         |
// return    execute file
// cache     save cache