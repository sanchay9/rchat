const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');

const {userAdd, userDel, userGet, userGetRoom} = require('./users.js');
const PORT = process.env.PORT || 5000

const router = require('./router');

const app = express();
const server = http.createServer(app);

app.use(cors());

const io = socketio(server , {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true
    }
})

io.on('connection', (socket) => {
    socket.on('join', ({name, room}, callback) => {
        const {error, user} = userAdd({id: socket.id, name, room});

        if (error) return callback(error);

        socket.emit('message', { user: '', text: `You have joined the room ${user.room}!`});
        socket.broadcast.to(user.room).emit('message', {user: '', text: `${user.name} just joined!`});

        socket.join(user.room);

        io.to(user.room).emit('roomData', {room: user.room, users: userGetRoom(user.room)})

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = userGet(socket.id);

        io.to(user.room).emit('message', {user: user.name, text: message});
        io.to(user.room).emit('roomData', {room: user.room, users: userGetRoom(user.room)});

        callback();
    });

    socket.on('disconnect', () => {
        const user = userDel(socket.id);

        if (user) {
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left!`})
        }
    })
});

app.use(router);

server.listen(PORT, () => console.log(`Server successfully started on port ${PORT}!`));
