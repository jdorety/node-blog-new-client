import React from "react";
import UserList from "./UserList";
import DefaultButton from "../../styledComponents/DefaultButton";

const NavBar = props => {
  const clickHandler = e => {
    props.history.push(e.target.name)
  }

  return (
    <div className="navigation-wrapper">
      <nav>
        <DefaultButton onClick={clickHandler} name='/'>All Quotes</DefaultButton>
        <DefaultButton onClick={clickHandler} name='/addquote' >Add Quote</DefaultButton>
      </nav>
      <UserList users={props.users} history={props.history} />
    </div>
  );
};

export default NavBar;