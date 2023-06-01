const fs = require('fs');


const cat = (a, done) => {
        fs.readFile(a, 'utf8', (err, data) => {
            if (err) {
              throw err;
            } else {
              done(data);
            }
          });
    }
  

  module.exports = cat