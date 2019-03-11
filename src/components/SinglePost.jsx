import React from "react";

export default function SinglePost(props) {
  return (
    <Card>
      <CardText>{props.text}</CardText>
    </Card>
  );
}
