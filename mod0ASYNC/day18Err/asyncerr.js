try {
   setTimeout(() => {
      throw new Error("BAD");
   }, 0);
}
catch(e) {
   console.log("CAUGHT");
}

// try/catch only sees current synchronous execution
// // NOT future async callbacks.

// try block starts
// ↓
// setTimeout registered
// ↓
// try block ends
// ↓
// later callback executes
// ↓
// throw happens OUTSIDE old try/catch