// server-side

const net = require("net");

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    console.log("rcv: " + data);
  });

  socket.on("end", () => {
    console.log("connection end");
  });

  socket.on("close", () => {
    console.log("client disconnted.");
  });

  socket.write("welcome to server");
});

server.on("error", (err) => {
  console.log("err" + err);
});

server.listen(8888, () => {
  server.on("close", () => {
    console.log("server closed.");
  });
  server.on("connection", () => {
    console.log(`connected`);
  });
});
