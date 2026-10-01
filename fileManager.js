// fileManager.js
// File Manager using the fs module - Create, Read, Update, Delete
// Run with: node fileManager.js

const fs = require('fs');
const logger = require('./modules/logger');

const filePath = './test.txt';

// 1. CREATE FILE
console.log('Creating File...');
fs.writeFile(filePath, 'Hello Node.js', (err) => {
  if (err) {
    logger.error(`Error creating file: ${err.message}`);
    return;
  }
  console.log('File Created');

  // 2. READ FILE
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      logger.error(`Error reading file: ${err.message}`);
      return;
    }
    console.log('File Reading');
    console.log(data);

    // 3. UPDATE FILE (append content)
    fs.appendFile(filePath, '\nLearning FS Module', (err) => {
      if (err) {
        logger.error(`Error updating file: ${err.message}`);
        return;
      }
      console.log('File Updated');

      // Read again to show updated content
      fs.readFile(filePath, 'utf8', (err, updatedData) => {
        if (err) {
          logger.error(`Error reading updated file: ${err.message}`);
          return;
        }
        console.log(updatedData);

        // 4. DELETE FILE
        fs.unlink(filePath, (err) => {
          if (err) {
            logger.error(`Error deleting file: ${err.message}`);
            return;
          }
          console.log('File Deleted');
          logger.success('All file operations completed successfully.');
        });
      });
    });
  });
});
