const express = require('express');
const app = express();
const {
    Server
} = require("socket.io");
const http = require('http');
const server = http.createServer(app);

const io = new Server(server)


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});




const port = process.env.PORT || 2000
const liveserver = server.listen(port, () => {
    console.log(`listening on ${port}`);
});