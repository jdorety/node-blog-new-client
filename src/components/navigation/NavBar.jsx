import React from "react";
import UserList from "./UserList";
import DefaultButton from "../../styledComponents/DefaultButton";
import '../../css/index.css'

const NavBar = props => {
  const clickHandler = e => {
    props.history.push(e.target.name)
  }

  return (
    <nav>
      <div className="button-wrapper">
        <DefaultButton onClick={clickHandler} name='/'>All Quotes</DefaultButton>
        <DefaultButton onClick={clickHandler} name='/addquote' >Add Quote</DefaultButton>
      </div>
      <UserList users={props.users} history={props.history} />
    </nav>
  );
};

export default NavBar;