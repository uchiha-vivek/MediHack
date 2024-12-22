import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { io } from 'socket.io-client';

let socket;

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5173';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);
    socket.emit('join', { name, room }, () => {
      // Handle callback if needed
    });
    

    return () => {
      socket.disconnect(); // Properly disconnect the socket
    };
  }, [ENDPOINT, location.search]);



  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);


const sendMessage = (event) => {
  event.preventDefault();

  if(message) {
    socket.emit('sendMessage', message, () => setMessage(''));
  }
}


  return (
    <div>Chat</div>
  );
};

export default Chat;
