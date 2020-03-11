
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
let connection;
const handleUserInput = (data) => {
  if (data === "a") connection.write('Move: left');
  if (data === "w") connection.write('Move: up');
  if (data === "d") connection.write('Move: right');
  if (data === "s") connection.write('Move: down');
  if (data === "j") connection.write('Move: left');
  if (data === "i") connection.write('Move: up');
  if (data === "l") connection.write('Move: right');
  if (data === "k") connection.write('Move: down');
  if (data === "\u0003") {
    console.log("See ya Later snakalator\n");
    process.exit();
  }
}
 const setupInput = (conn) => {
   connection = conn
   const stdin = process.stdin;
   stdin.setRawMode(true);
   stdin.setEncoding('utf8');
   stdin.resume();
   stdin.on('data', (key) => {
    handleUserInput(key);
   })
   return stdin;
 }

 module.exports = {setupInput};