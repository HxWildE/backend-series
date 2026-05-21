const promise = new Promise((resolve, reject) => {
  const success = true;

  if (!success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });