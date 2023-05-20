// client side

const net = require("net");

const socket = net.connect({ port: 8888 });

socket.on("connect", () => {
  console.log("connected to server!");

  socket.write("Hello server!");
});

socket.on("data", (chunk) => {
  console.log("rcv: " + chunk);
});

socket.on("end", () => {
  console.log("disconnected.");
});

socket.on("error", (err) => {
  console.log(err);
});

socket.on("timeout", () => {
  console.log("connection timeout.");
});
