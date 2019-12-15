import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { AppContext } from "../context";
import asyncComponent from "../hoc/asyncComponent";

import { Segment, Card } from "semantic-ui-react";

const AsyncModal = asyncComponent(() => {
  return import("./AddAttendeeModal");
});

const AsyncCAttendee = asyncComponent(() => {
  return import("./CAttendee");
});

const CAttendees = props => {
  const context = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [attendees, setAttendees] = useState("");
  const [addAttendeeModalShow, setAddAttendeeModalShow] = useState(
    context.addAttendeeModalShow
  );

  useEffect(() => {
    setLoading(true);
    setAttendees(context.attendees);
    setLoading(false);
  }, [context.attendees, context.addAttendeeModalShow]);

  const hideModal = () => setAddAttendeeModalShow(!addAttendeeModalShow);

  const { deleteAttendee, addAttendee } = context;

  return (
    <div className="talks-box">
      <Segment.Group>
        <Segment className="c-header2">
          Attendees [{attendees.length}]
          <span className="pull-right clearfix move-right">
            <i
              className="glyphicon glyphicon-plus-sign glypcon blue-link"
              onClick={() => setAddAttendeeModalShow(true)}
            ></i>
          </span>
        </Segment>

        <Card.Group centered itemsPerRow={2}>
          {attendees.length >= 1 ? (
            attendees.map(attendee => (
              <AsyncCAttendee
                key={attendee.id}
                attendee={attendee}
                delete={deleteAttendee}
              />
            ))
          ) : (
            <div className="center-block text-center">
              <p>
                No attendees data to display, Add new attendee to view Listing
              </p>
              <Button onClick={() => setAddAttendeeModalShow(true)}>
                Add Attendee
              </Button>
            </div>
          )}
        </Card.Group>
      </Segment.Group>
      {addAttendeeModalShow ? (
        <AsyncModal
          show={addAttendeeModalShow}
          onHide={hideModal}
          addattendee={addAttendee}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default CAttendees;
