import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

import CTalk from "./CTalk";
import AddTalkModal from "./AddTalkModal";
import { AppContext } from "../context";

export class CTalks extends Component {
  static contextType = AppContext;
  _isMounted = false;

  state = {
    talks: [],
    attendees: [],
    loading: true
  };

  fetchTalks = () => {
    this.setState({ loading: true });

    axios
      .get(`/api/v1/talks`)
      .then(res => res.data)
      .then(talks => {
        this._isMounted && this.setState({ loading: false, talks: talks.data });
      });
  };

  fetchAttendees = () => {
    this.setState({ loading: true });
    axios
      .get(`/api/v1/attendees`)
      .then(res => res.data)
      .then(attendees => {
        this._isMounted &&
          this.setState({ loading: false, attendees: attendees.data });
      });
  };

  addTalk = data => {
    try {
      axios
        .post(`api/v1/talks/`, data)
        .then(res => res.data)
        .then(talks => {
          this.setState({ loading: false, talks });
        });
    } catch (error) {
      this.setState({ error });
    }
  };

  deleteTalk = id => {
    try {
      axios
        .delete(`/api/v1/talks/${id}`)
        .then(res => res.data)
        .then(talks => {
          this.setState({ loading: false, talks });
        });
    } catch (error) {
      this.setState({ error });
    }
  };

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.fetchTalks();
    this._isMounted && this.fetchAttendees();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {
      setShowModal,
      deleteTalk,
      addModalClose,
      addModalShow,
      getSpeaker,
      fetchTalks
    } = this.context;

    const { talks, attendees } = this.state;

    return (
      <Fragment>
        <div className="panel panel-primary">
          <div className="panel-heading display-4">
            <h3 className="panel-title">
              {" "}
              Talks [{talks.length || 0}]
              <span className="pull-right clearfix move-right">
                <i
                  className="glyphicon glyphicon-search glypcon"
                  onClick={setShowModal}
                ></i>
                <i
                  className="glyphicon glyphicon-plus-sign glypcon white-link"
                  onClick={setShowModal}
                ></i>
                <i
                  className="glyphicon glyphicon-trash glypcon"
                  onClick={deleteTalk}
                ></i>
              </span>
            </h3>
          </div>
          <div className="panel-body">
            <Fragment>
              {talks.length >= 1 ? (
                talks.map(talk => (
                  <CTalk
                    key={talk.id}
                    talk={talk}
                    attendees={attendees}
                    delete={deleteTalk}
                  />
                ))
              ) : (
                <div className="center-block text-center">
                  <p>No talk data to display, Add new talk to view Listing</p>
                  <Button onClick={setShowModal}>Add Talk Data</Button>
                </div>
              )}
            </Fragment>

            <AddTalkModal
              show={addModalShow}
              onHide={addModalClose}
              addTalk={addTalk}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CTalks;
