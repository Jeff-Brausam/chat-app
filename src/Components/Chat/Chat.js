import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import Messages from './Messages/Messages.js';
import RoomSidebar from './RoomSidebar/RoomSidebar.js';
import classes from './Chat.module.scss';

export const Chat = props => {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const { name } = queryString.parse(window.location.search);
    setName(name);

    props.socket.emit('join', { name }, () =>{
      
    });
    // On chat unmount 
    return () => {
      props.socket.emit('disconnect');
      props.socket.off();
    }
  }, [props.socket, props.socketURL]);

  // Syncs messages from backend to front-end. 
  useEffect(() => {
    props.socket.on('chat message', message => setMessages([...messages, message]));
  }, [props.socket, messages]);
  
  // Update users
  useEffect(() => {
    props.socket.on('get users', userList => setUsers(userList));
  }, [props.socket, users]);
  
  // Set message and sends to backend
  const submitMessage = (e) => {
    e.preventDefault();

    if (value === "") {
      return;
    }

    props.socket.emit('chat message', value);
    
    setValue("");
  }

  return (
    <div className={classes.ChatRoom}>
      <div className={classes.ChatLeft}>
        <RoomSidebar name={name} users={users}/>
      </div>
      <div className={classes.ChatRight}>
        <div className={classes.Chat}>
          <Messages socket={props.socket} curUser={name} messages={messages}/>
        </div>
        <div className={classes.ChatInput}>
          <form action="" onSubmit={submitMessage}>
            <input type="text" id="m" autoComplete="off" value={value} onChange={(event) => setValue(event.target.value)}/>
            <button type="submit" onClick={submitMessage} >Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Chat;
