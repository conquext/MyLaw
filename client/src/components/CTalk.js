import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

import EditTalkModal from "./EditTalkModal";

class CTalk extends Component {
  state = {
    addModalShow: false,
    speaker: "",
    loading: true
  };

  setModalShow = () => {
    this.setState({ addModalShow: true });
  };

  setShowModal = e => {
    e.preventDefault();
    this.setState({ addModalShow: true });
  };

  handleDelete = e => {
    e.preventDefault();
  };

  getSpeaker = speakerId => {
    axios
      .get(`/api/v1/attendees/${speakerId}`)
      .then(res => res.data)
      .then(res => res.data)
      .then(speaker => {
        this.setState({ speaker: speaker[0].name });
      });
  };

  componentWillMount() {
    this.props.talk.speakerId && this.getSpeaker(this.props.talk.speakerId);
  }

  componentDidMount() {
    this._isMounted = true;
    console.log(this.props.talk);
    this.props.talk.speakerId && this.getSpeaker(this.props.talk.speakerId);
  }

  render() {
    const addModalClose = () => this.setState({ addModalShow: false });

    const { id, topic, speakerId = null } = this.props.talk;

    const talkObject = {
      id,
      topic
    };

    if (speakerId) talkObject.speakerId = speakerId;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-12">
            {" "}
            <div className="panel panel-danger">
              <div className="panel-heading">
                {topic}
                <span className="pull-right">
                  <i
                    className="glyphicon glyphicon-pencil glypcon"
                    onClick={this.setShowModal}
                  ></i>
                  <i
                    className="glyphicon glyphicon-trash glypcon"
                    onClick={this.handleDelete}
                  ></i>
                </span>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-6">
                    {this.state.speaker ? (
                      <h5>
                        Speaker: <span>{this.state.speaker}</span>{" "}
                      </h5>
                    ) : (
                      <Button onClick={this.setShowModal}>
                        Assign Speaker
                      </Button>
                    )}
                  </div>
                  {/* <div className="col-md-6">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        Attributes
                        <span className="pull-right">
                          <i className="glyphicon glyphicon-pencil glypcon"></i>
                          <i
                            className="glyphicon glyphicon-trash glypcon"
                            onClick={this.deletePerson}
                          ></i>
                        </span>
                      </div>
                      <div className="panel-body">
                        <Attributes attributes={attributes} />
                      </div>
                    </div>
                  </div> */}
                </div>
                <EditTalkModal
                  show={this.state.addModalShow}
                  onHide={this.addModalClose}
                  updatedObject={talkObject}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CTalk;
