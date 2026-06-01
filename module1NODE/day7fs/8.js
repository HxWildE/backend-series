// 9. readdir() =  List file name (ls in linux)
// Node asks OS:give me names inside folder
// Only names.
// Not content Not size. Not metadata.
// Why no size?

// Because:
// Folder may contain 100000 files
// Fetching metadata for all automatically would be expensive.

const fs = require('fs')

fs.readdir("uploads",(err,files)=>{
    console.log(files);
})

// Suppose:

// uploads/
//   img1.png
//   img2.png
//   doc.pdf

// Code:

// fs.readdir("uploads", (err, files) => {
//   console.log(files);
// });

// Output:

// [
//   "img1.png",
//   "img2.png",
//   "doc.pdf"
// ]