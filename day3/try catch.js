
function getUser() {

  return new Promise((resolve) => {

    setTimeout(() => {
      resolve({
        name: "Harsh"
      });
    }, 2000);

  });

}

async function main() {

  try {

    const data = await getUser();

    console.log(data);

  } catch (error) {

    console.log(error);

  }

}

main();