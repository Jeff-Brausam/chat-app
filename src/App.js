import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter } from 'react-router-dom';

import Layout from './hoc/layout/layout.js';
import Chat from './Components/Chat/Chat.js';
import Join from './Components/Join/Join.js';

import socketIOClient from "socket.io-client";
// const socketURL = "http://localhost:4001";
// Delployed
const socketURL = "https://jeff-brausam-chat-application.herokuapp.com/";

function App() {
  const [socket, setSocket] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setSocket(socketIOClient(socketURL));
    setLoaded(true);
  }, []);

  // Once the socket loads and is set, create the Chat 
  let chat = null;

  if (loaded === true) {
    chat = <Chat socket={socket} endpoint={socketURL}/>
  }

  return (
    <Layout>
      <Switch>
        <Route path="/chat" render={() => chat}/>
        <Route path="/" exact component={Join}/>
      </Switch>
    </Layout>
  );
}


export default withRouter(App);
