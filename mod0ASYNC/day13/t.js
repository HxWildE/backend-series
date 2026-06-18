Promise.resolve(10)
   .then((v) => {
      return v * 2;
   })
   .then(console.log);
//implicit promise me value chali gyi 

   Promise.resolve(10)
   .then((v) => {
      return Promise.resolve(v * 2);
   })
   .then(console.log);

//explicit ek promise banake return kiya

