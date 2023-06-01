const pwd = require ('./pwd.js');
const ls = require ('./ls.js');
const cat = require ('./cat.js');

//done fn
function done(result){
    process.stdout.write(result);
    process.stdout.write('\nprompt > ');
}


//Output a prompt
process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); //remove the newline
  
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  
    if (cmd === 'pwd') {
      pwd(done);
    } else if (cmd === 'ls') {
      ls(done);
    } else if (cmd.split(" ")[0] === 'cat') {
      cat(cmd.split(" ")[1], done);
    }
  
  });
