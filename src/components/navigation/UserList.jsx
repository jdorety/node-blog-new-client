import React from "react";
import UserLink from './UserLink';

export default function UserList(props) {
  return (
    <div className="user-list">
      {props.users.map(user => {
        return <UserLink name={user.name} id={user.id} key={user.id} history={props.history}/> 
      })}
    </div>
  );
}
