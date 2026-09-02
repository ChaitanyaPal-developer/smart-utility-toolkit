// modules/logger.js
// Custom logger module - demonstrates module reusability
// Bonus: includes timestamp logs

function log(message) {
  const timestamp = new Date().toISOString();
  console.log(`[LOG] [${timestamp}] ${message}`);
}

function error(message) {
  const timestamp = new Date().toISOString();
  console.log(`[ERROR] [${timestamp}] ${message}`);
}

function success(message) {
  const timestamp = new Date().toISOString();
  console.log(`[SUCCESS] [${timestamp}] ${message}`);
}

// Export multiple functions as an object
module.exports = { log, error, success };