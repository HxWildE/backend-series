function getUser() {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve("Harsh");
      }, 2000);
   });
}

getUser()
   .then((user) => {
      console.log(user);
   });