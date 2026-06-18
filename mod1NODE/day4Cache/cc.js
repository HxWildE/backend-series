// console.log(require.cache) 

console.log(
   require.cache[
      require.resolve('./cc')
   ].paths
);

//require.resolve give the paths
