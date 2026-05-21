setTimeout(() => {
  console.log("timeout");
}, 0);

// for (let i = 0; i < 10000000000; i++) {}

console.log("done");

function fetchData(callback) {

  setTimeout(() => {
    const data = "User Data";

    callback(data);

  }, 2000);
}

fetchData((result) => {
  console.log(result);
});