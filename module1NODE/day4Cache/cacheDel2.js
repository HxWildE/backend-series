const a = require('./exp');

delete require.cache[
  require.resolve('./exp')
];

console.log(a)

// a still exists.
// Memory me object abhi bhi reh sakta hai.
// Sirf cache registry se entry gayi.
// Garbage collector baad me decide karega.

