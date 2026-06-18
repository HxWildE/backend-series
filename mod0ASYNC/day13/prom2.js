const p = Promise.resolve(10);

const newPromise = p.then((value) => {
   return value * 2;
});

newPromise.then(console.log);

//.then new newPromised me ek resolved prommise return kiya wiht value 20
//return value of then is a resolved value of the new promise