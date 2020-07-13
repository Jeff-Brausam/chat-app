import React from 'react';
import Message from './Message/Message.js';
import classes from './Messages.module.scss';

const Messages = props => {
  const userMessages = props.messages.map((el, ind) => 
      <Message message={el.message} key={ind} curUser={props.curUser} userName={el.user}/>
  );
  return (
    <ul className={classes.Messages}> 
      {userMessages}
    </ul>
  )
}

export default Messages;