const net = require('net');
const dotenv = require('dotenv').config(
    // { quiet: true }
);
const PORT = 25565;
const HOST = process.env.HOST;
const hostnameBytes = Buffer.from(HOST, 'utf8');
// it is now tmrw :D

const socket = net.createConnection(PORT, HOST);

const openingPacket = Buffer.from([
    // put data here.
])

socket.setTimeout(5000);

socket.on('connect', () => {
  console.log('connection opened');
  // write the buffer to the websocket via socket.write(openingPacket) once our packet's buffer has been fully defined.

});