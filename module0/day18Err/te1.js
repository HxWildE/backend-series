async function getData() {
  return Promise.reject("failed");
}

async function run() {
  console.log("A");

  try {
    let val = await getData();
    console.log(val);    //y linE NSSSahi chli bc
  } catch (err) {
    console.log(err);
  }

  console.log("B");
}

run();