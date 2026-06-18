Promise.resolve(5)
  .then((val) => {
    throw new Error("oops");
  })
  .catch((err) => {
    console.log(err.message);
  });