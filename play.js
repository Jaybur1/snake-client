const { connect } = require('./client');
const typewrite = require('./typewrite');


/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = (data) => {
  if (data === "\u0003") {
    console.log("See ya Later snakalator\n");
    process.exit();
  }
}
 const setupInput = () => {
   const stdin = process.stdin;
   stdin.setRawMode(true);
   stdin.setEncoding('utf8');
   stdin.resume();
   stdin.on('data', (key) => {
    handleUserInput(key);
   })
   return stdin;
 }

console.log('Connecting...')
connect();
setupInput();