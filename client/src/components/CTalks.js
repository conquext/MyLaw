import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

import CTalk from "./CTalk";
import AddTalkModal from "./AddTalkModal";
// import { TalksContext } from "../context";

export class CTalks extends Component {
  //   static contextType = TalksContext;
  _isMounted = false;

  state = {
    talks: [],
    loading: true,
    addModalShow: false,
    error: []
  };

  setShowModal = e => {
    e.preventDefault();
    this.setState({ addModalShow: true });
  };

  getTalk = slug => {
    let tempTalks = [...this.state.talks];
    const talk = tempTalks.find(talk => talk.slug === slug);
    return talk;
  };

  getTalks = () => {
    return [...this.state.talks];
  };

  getAttendee = slug => {
    let tempAttendees = [...this.state.attendees];
    const attendee = tempAttendees.find(attendee => attendee.slug === slug);
    return attendee;
  };

  getAttendees = () => {
    return [...this.state.attendees];
  };

  assignTalk = (talkId, attendeeId) => {
    try {
      axios
        .patch(`/api/v1/talks/${talkId}`, {
          speakerId: attendeeId
        })
        .then(res => res.data)
        .then(talks => {
          this.setState({ loading: false, talks });
        });
    } catch (error) {
      this.setState({ error });
    }
  };

  handleDelete = e => {
    e.preventDefault();
    console.log(e.target);

    try {
      axios
        .delete(`/api/v1/talks/${e.target.talkId}`)
        .then(res => res.data)
        .then(talks => {
          this.setState({ loading: false, talks });
        });
    } catch (error) {
      this.setState({ error });
    }
  };

  fetchTalks = () => {
    axios
      .get(`/api/v1/talks`)
      .then(res => res.data)
      .then(talks => {
        this._isMounted && this.setState({ loading: false, talks: talks.data });
      });
  };

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.fetchTalks();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { talks } = this.state;

    let addModalClose = () => this.setState({ addModalShow: false });

    return (
      <Fragment>
        <div className="panel panel-primary">
          <div className="panel-heading display-4">
            <h3 className="panel-title">
              {" "}
              Talks
              <span className="pull-right clearfix move-right">
                <i
                  className="glyphicon glyphicon-search glypcon"
                  onClick={this.setShowModal}
                ></i>
                <i
                  className="glyphicon glyphicon-plus-sign glypcon white-link"
                  onClick={this.setShowModal}
                ></i>
                <i
                  className="glyphicon glyphicon-trash glypcon"
                  onClick={this.handleDelete}
                ></i>
              </span>
            </h3>
          </div>
          <div className="panel-body">
            <Fragment>
              {talks.length >= 1 ? (
                talks.map(talk => <CTalk key={talk.id} talk={talk} />)
              ) : (
                <div className="center-block text-center">
                  <p>No talk data to display, Add new talk to view Listing</p>
                  <Button onClick={this.setShowModal}>Add Talk Data</Button>
                </div>
              )}
            </Fragment>

            <AddTalkModal
              show={this.state.addModalShow}
              onHide={addModalClose}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CTalks;
