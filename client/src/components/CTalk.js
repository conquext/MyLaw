import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { AppContext } from "../context";

import EditTalkModal from "./EditTalkModal";

const CTalk = props => {
  const { id, topic, speakerId = null } = props.talk;

  const context = useContext(AppContext);
  //   console.log("fnContext", context);
  //   console.log("props", props.attendees);

  const { setShowModal, deleteTalk, addModalClose, addModalShow } = context;

  const getSpeaker = speakerId => {
    let tempAttendees = [...props.attendees];
    const speakerDeet = tempAttendees.find(
      attendee => attendee.id == speakerId
    );
    return speakerDeet;
  };

  const talkObject = {
    id,
    topic
  };

  let speakerName = "";
  const speaker = getSpeaker(props.talk.speakerId);
  if (speaker && speaker.name) {
    speakerName = speaker.name;
  } else speakerName = null;

  speakerId ? (talkObject.speakerId = speakerId) : "";

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
                  onClick={setShowModal}
                ></i>
                <i
                  className="glyphicon glyphicon-trash glypcon"
                  onClick={() => props.delete(id)}
                ></i>
              </span>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-md-6">
                  {speaker ? (
                    <h5>
                      Speaker: <span>{speakerName}</span>{" "}
                    </h5>
                  ) : (
                    <Button onClick={setShowModal}>Assign Speaker</Button>
                  )}
                </div>
              </div>
              <EditTalkModal
                show={addModalShow}
                onHide={addModalClose}
                updatedObject={talkObject}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTalk;
