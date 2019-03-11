import React from 'react';

export default function UserLink (props) {
  function clickHandler () {
    props.history.push(`/user/${props.id}`)
  }

  return(
    <button onClick={clickHandler}>{props.name}</button>
  )
}