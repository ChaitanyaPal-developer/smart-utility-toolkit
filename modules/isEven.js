// modules/isEven.js
// Custom module that checks whether a number is even or odd

function isEven(num) {
  return num % 2 === 0;
}

// Export the function so other files can use it via require()
module.exports = isEven;