// dice.js
// Random Dice Generator using the crypto module
// Run with: node dice.js

const crypto = require('crypto');
const logger = require('./modules/logger');

// Generates a secure random integer between 1 and 6
function rollDice() {
  // crypto.randomInt(min, max) -> max is exclusive, so use 7
  return crypto.randomInt(1, 7);
}

logger.log('Rolling dice 5 times...');

for (let i = 1; i <= 5; i++) {
  const result = rollDice();
  console.log(`Roll ${i}: Dice Rolled: ${result}`);
}

logger.success('Dice rolling simulation complete.');