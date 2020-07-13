import React from 'react';
import classes from './Message.module.scss';

const Message = props => {
  let textMessage = (
      <>
        <p>{props.userName}</p>
          <li>
            <p>{props.message}</p>
          </li>
      </>
  )
  // Switches styles depending on if from user or other another room user
  let messageStyle = classes.Message;
  if (props.userName === props.curUser) {
    messageStyle = classes.UserMessage;
  }
  
  // A message from the system (peope joining and leaving, will be styled and look different)
  if (props.userName === 'admin') {
    textMessage = (
      <>
          <li>
            <p>{props.message}</p>
          </li>
      </>
    );
    messageStyle = classes.AdminMessage;
  }
  return (
    <div className={messageStyle}>
        {textMessage}
    </div>
  )
}

export default Message;