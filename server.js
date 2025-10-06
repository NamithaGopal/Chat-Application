const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;

// Serve static files from public folder
app.use(express.static('public'));

// Socket.io connection
io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for chat messages
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // Send message to all connected clients
    });

    // Handle user disconnect
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start server
http.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
