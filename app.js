// app.js
// Demonstrates custom module creation & reusability
// Imports isEven.js and logger.js modules

const isEven = require('./modules/isEven');
const logger = require('./modules/logger');

logger.log('Starting module reusability demo...');

const numbers = [2, 7, 10, 15, 22, 33];

numbers.forEach((num) => {
  if (isEven(num)) {
    console.log(`${num} is Even`);
  } else {
    console.log(`${num} is Odd`);
  }
});

logger.success('Module demo finished. isEven.js and logger.js were reused here.');

// Run with: node app.js