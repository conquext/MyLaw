import React from "react";
import { Card } from "semantic-ui-react";

const CAttendee = props => (
  <Card>
    <Card.Content className="card-middle">
      {" "}
      <Card.Header>{props.attendee.name}</Card.Header>
      <Card.Meta>{props.attendee.email}</Card.Meta>
    </Card.Content>
  </Card>
);

export default CAttendee;
