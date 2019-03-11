import React from "react";
import UserList from "./UserList";
import '../../css/index.css'

const NavBar = props => {
  const clickHandler = e => {
    props.history.push(e.target.name)
  }

  return (
    <nav>
      <div className="button-wrapper">
        <button onClick={clickHandler} name='/'>All Quotes</button>
        <button onClick={clickHandler} name='/addquote' >Add Quote</button>
      </div>
      <UserList users={props.users} history={props.history} />
    </nav>
  );
};

export default NavBar;