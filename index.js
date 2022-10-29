
const httpServer = require("http").createServer();

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
    transports: ['websocket', 'polling'],

  },
  allowEIO3: true

});

io.on("connection", (socket) => {
  console.log("connected");
  socket.on('message', (data)=>{
    console.log(data);
  }); // short form
});

httpServer.listen(3000);