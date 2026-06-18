require('./exp');
require('./exp');
require('./exp');
//same cache being referred 

delete require.cache[
   require.resolve('./exp')
];

// console.log(require.resolve('./cc'))
//cache deleted - no new loading happens
require('./exp');