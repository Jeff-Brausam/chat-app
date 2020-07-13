import React from 'react';
import classes from './RoomSidebar.module.scss';

const RoomSidebar = (props) => {
  const users = props.users.map((el, ind) =>
    <div className={classes.User} key={ind}>
      <div className={classes.dot}></div>
      <li >{el.name}</li>
    </div> 
  )
  return(
    <div className={classes.RoomSidebar}>
      <h4>Active Users</h4>
      <div className={classes.usersContainer}>
        <ul>
          {users}  
        </ul>
      </div>
    </div>
  );
}
 
export default RoomSidebar;