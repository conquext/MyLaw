import React, { Component, Fragment } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import AddTalkModal from "./AddTalkModal";
import CAttendee from "./CAttendee";

import { Segment, Card, Header } from "semantic-ui-react";

export default class CAttendees extends React.Component {
  _isMounted = false;

  state = {
    attendees: [],
    loading: true,
    addModalShow: false,
    error: []
  };

  setShowModal = e => {
    e.preventDefault();
    this.setState({ addModalShow: true });
  };

  getAttendee = slug => {
    let tempAttendees = [...this.state.attendees];
    const attendee = tempAttendees.find(attendee => attendee.slug === slug);
    return attendee;
  };

  getAttendees = () => {
    return [...this.state.attendees];
  };

  fetchAttendees = () => {
    axios
      .get(`/api/v1/attendees`)
      .then(res => res.data)
      .then(attendees => {
        this._isMounted &&
          this.setState({ loading: false, attendees: attendees.data });
      });
  };

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.fetchAttendees();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { attendees } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });

    return (
      <div className="talks-box">
        <Segment.Group>
          <Segment className="c-header2">
            Attendees [{attendees.length}]
          </Segment>

          <Card.Group>
            {attendees.length >= 1 ? (
              attendees.map(attendee => (
                <CAttendee key={attendee.id} attendee={attendee} />
              ))
            ) : (
              <div className="center-block text-center">
                <p>
                  No attendees data to display, Add new attendee to view Listing
                </p>
                <Button onClick={this.setShowModal}>Add Attendee</Button>
              </div>
            )}
          </Card.Group>
        </Segment.Group>
        <AddTalkModal show={this.state.addModalShow} onHide={addModalClose} />
      </div>
    );
  }
}
