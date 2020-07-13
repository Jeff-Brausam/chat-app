import React, { useState } from 'react';
import classes from './Join.module.scss';

const Join = (props) => {
  const [name, setName] = useState('');

  const joinRoom = (e) => {
    e.preventDefault();
    const query = `?name=${name}`
    props.history.push('/chat' + query);
  }

  return (
    <div className={classes.Join}>
      <div className={classes.Inner}>
        <h1>Join</h1>
        <div className={classes.FormContainer}>
          <form onSubmit={joinRoom}>
            <input placeholder="User" maxLength="15" type="text" onChange={(event) => setName(event.target.value)} />
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  )


}


export default Join;

