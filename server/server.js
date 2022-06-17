const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const cors = require('cors');
const http = require('http');
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const messageRoutes = require('./routes/messageRoutes')
const PORT = process.env.PORT || 4000
const DB_URL = process.env.DB_URL || 'mongodb://127.0.0.1:27017/chat_demo'
const app = express()


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello world")
})

// connect to the database
try {
    mongoose.connect(DB_URL);
} catch (error) {
    console.error("DB not found", error);
    process.exit(1);
}

const db = mongoose.connection
db.on('error', (err) => console.error(err));
db.once('open', () => console.log("Successful connected to database!"));

// publish routes here
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

// all users
let users ={}
// integrate socket.io
const server = http.createServer(app);
const io = require("socket.io")(server, {
    pingTimeout: 60000,
    cors: {
      origin: "http://localhost:3000",
      // credentials: true,
    },
  });
  
io.sockets.emit("hi","everyone")
io.on('connection', (socket) => {
    
    
    // when new user connected
    console.log("New user connected:",socket.id)

    // join new user
    socket.on("setup", (userData) => {
        socket.join(userData._id);
        socket.emit("connected");
      });

      // join user to chat
      socket.on("join chat", (room) => {
        socket.join(room);
        console.log("User Joined Room: " + room);
      });

      // typing detection
      socket.on("typing", (room) => socket.in(room).emit("typing"));
      socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));
    
     // handle new message
     socket.on("new message", (newMessageRecieved) => {
        var chat = newMessageRecieved.chat;
    
        if (!chat.users) return console.log("chat.users not defined");
    
        chat.users.forEach((user) => {
          if (user._id == newMessageRecieved.sender._id) return;
    
          socket.in(user._id).emit("message recieved", newMessageRecieved);
        });
      });
    

    // when user disconnected
    socket.off("setup", () => {
        console.log("USER DISCONNECTED");
        socket.leave(userData._id);
      });

});

server.listen(PORT,()=>console.log(`Server listen on port ${PORT}`));