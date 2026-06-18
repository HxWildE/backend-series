function getUser() {

  return new Promise((resolve) => {

    setTimeout(() => {
      resolve({
        name: "Harsh"
      });
    }, 2000);

  });

}

// getUser()
//   .then((user) => {
//     console.log(user);
//   });

async function main() {

  const user = await getUser();
  console.log(user);
}

main();