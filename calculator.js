const logger = require('./modules/logger');


const operation = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);

logger.log(`Calculator started with operation: ${operation}`);

function calculate(op, a, b) {
  // Validate inputs
  if (isNaN(a) || isNaN(b)) {
    logger.error('Invalid numbers provided.');
    console.log('Usage: node calculator.js <add|sub|mul|div> <num1> <num2>');
    return;
  }

  let result;

  switch (op) {
    case 'add':
      result = a + b;
      break;
    case 'sub':
      result = a - b;
      break;
    case 'mul':
      result = a * b;
      break;
    case 'div':
      if (b === 0) {
        logger.error('Division by zero is not allowed.');
        return;
      }
      result = a / b;
      break;
    default:
      logger.error(`Invalid operation "${op}".`);
      console.log('Supported operations: add, sub, mul, div');
      return;
  }

  console.log(`Result: ${result}`);
  logger.success('Calculation completed successfully.');
}

calculate(operation, num1, num2);
