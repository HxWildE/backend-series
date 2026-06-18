const p = new Promise((resolve) => {

  setTimeout(() => {
    resolve("Done");
    console.log("resolved\n")
  }, 2000);

});

p.then((data) => {
  console.log("then")
  console.log(data);
});