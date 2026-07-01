const net = require('net');
const dotenv = require('dotenv').config(
    // { quiet: true }
);
const PORT = 25565;
const HOST = process.env.HOST;
// it is now tmrw :D

const socket = net.createConnection(PORT, HOST);

const openingPacket = Buffer.from([
    // put data here.
])

socket.setTimeout(1500); // Minecraft takes 1.5seconds inbetween eahc packet apparently, so im just gonna make this consistent everywhere a handshake has to be waited on

socket.on('connect', () => {
  console.log('connection opened');
  // write the buffer to the websocket via socket.write(openingPacket) once our packet's buffer has been fully defined.
});