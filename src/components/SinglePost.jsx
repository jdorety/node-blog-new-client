import React from "react";
import { Card, CardText } from "reactstrap";

export default function SinglePost(props) {
  return (
    <Card>
      <CardText>{props.text}</CardText>
    </Card>
  );
}
