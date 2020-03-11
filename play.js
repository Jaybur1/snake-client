const net = require('net');

//Establishes connection with the game server
const connect = () => {
 const conn =  net.createConnection({
    host: '10.0.2.15',
    port: 50541
  })

  //interpret incoming data as text

  conn.setEncoding('utf8');
  conn.on('data', (data)=>{
    console.log('server says: ',data);
  })

  return conn;
}

console.log('connecting ...')
connect();
