import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { AppContext } from "../context";

import asyncComponent from "../hoc/asyncComponent";

const AsyncModal = asyncComponent(() => {
  return import("./EditTalkModal");
});

const CTalk = props => {
  const { id, topic, speakerId = null } = props.talk;
  const [loading, setLoading] = useState(false);
  const context = useContext(AppContext);

  const [editModalShow, setEditModalShow] = useState(context.editModalShow);

  const hideModal = () => {
    setEditModalShow(!editModalShow);
  };

  useEffect(() => {
    setLoading(false);
  }, [props]);

  const { deleteTalk, editModalClose, assignTalk } = context;

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
    <div className="card-body">
      {/* <div className="row"> */}
      {/* <div className="col-md-12"> */}{" "}
      <div className="panel panel-danger">
        <div className="panel-heading">
          <span className="text-cut mb-2">{topic}</span>
          <span className="pull-right">
            <i
              className="glyphicon glyphicon-pencil glypcon"
              onClick={() => setEditModalShow(!editModalShow)}
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
                <Button onClick={() => setEditModalShow(true)}>
                  Assign Speaker
                </Button>
              )}
            </div>
          </div>
          {editModalShow ? (
            <AsyncModal
              show={editModalShow}
              onHide={hideModal}
              assigntalk={assignTalk}
              updatedobject={talkObject}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default CTalk;
