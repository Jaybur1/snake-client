const net = require("net");
const typewrite = require('./typewrite')

//Establishes connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541
  });

  //interpret incoming data as text

  conn.setEncoding("utf8");
  conn.on("data", data => {
    typewrite(data);
  });

  conn.on("connect", () => {
    console.log("Welcome to SNEK")
    conn.write('Name: JAY');
  });

  return conn;
};

module.exports = { connect };
