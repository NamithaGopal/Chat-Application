# Real-Time Chat App

## Project Overview
The Real-Time Chat App is a web-based application that allows users to communicate instantly through a simple chat interface. This app leverages **Node.js, Express, and Socket.IO** to enable real-time communication between multiple users connected to the application. It is lightweight, responsive, and easy to use, making it ideal for collaborative communication scenarios or simple chat experiments.

Users can enter messages, which are instantly broadcasted to all connected clients. The app handles multiple simultaneous users and ensures that all messages are synchronized in real time. It includes a clean and modern interface with scrollable message display and input validation to prevent empty messages.

---

## Features
1. Real-time chat functionality using **Socket.IO**.
2. Responsive and professional user interface.
3. Multiple users can chat simultaneously.
4. Scrollable chat area that updates dynamically.
5. Input validation to prevent empty messages.
6. Easy to run locally using Node.js.

---

## Implementation Details
The app uses **Node.js** for the backend server and **Express.js** to serve static files. Socket.IO handles the WebSocket communication for real-time messaging. 

- **Server (`server.js`)**: Manages user connections, receives messages from clients, and broadcasts them to all connected clients.  
- **Client (`public/client.js`)**: Connects to the server, sends messages when users submit the form, and listens for incoming messages to update the chat display dynamically.  
- **Frontend (`index.html` + `style.css`)**: Provides a simple and clean chat interface with a scrollable message container and input form. Styling ensures the app is visually appealing and easy to use.

---

## Challenges Faced
1. Ensuring real-time updates for multiple users simultaneously.
2. Handling disconnections gracefully.
3. Maintaining a simple yet professional user interface.

---

## Future Enhancements
- Add user authentication and custom usernames.
- Add timestamps for each message.
- Store chat history in a database (MongoDB/PostgreSQL).
- Allow private messaging and chat rooms.
- Add emojis and rich text formatting.

---

## How to Use
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to launch the server.
4. Open `http://localhost:3000` in your browser.
5. Type a message and press **Send** to chat in real time.

---

## Technologies Used
- Node.js
- Express.js
- Socket.IO
- HTML, CSS, JavaScript

---

## Author
- NAMITHA G 

##OUTPUT

<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/d6a1e252-9657-47c3-89b9-61bfb1589764" />
<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/9fd14d06-bfc6-476c-b1d8-b729389820c2" />
