Promise.reject("FAILED")
  .catch(err => {
      console.log(err);
  });


//   Promise.reject("FAILED");
// async failure repressetn krta h 

// very imp down thing:

new Promise((resolve, reject) => {
   throw new Error("BAD");
})
.catch(err => {
   console.log(err.message);
});

//throw error -> reject(error)
//await rejectedPromise =To throw rejectionReason

// awaited rejection behaves like throw
// THIS is foundation of async error handling.