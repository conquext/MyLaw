import React, { useState, useEffect, useContext, Fragment } from "react";
import { Button } from "react-bootstrap";
import CTalk from "./CTalk";
import AddTalkModal from "./AddTalkModal";
import { AppContext } from "../context";

const CTalks = () => {
  const context = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [talks, setTalks] = useState("");

  useEffect(() => {
    setLoading(true);
    setTalks(context.talks);
    setLoading(false);
  }, [context.talks, context.attendees]);

  const {
    setShowAddModal,
    deleteTalk,
    addModalClose,
    addModalShow,
    addTalk,
    attendees
  } = context;

  return (
    <Fragment>
      <div className="panel panel-primary">
        <div className="panel-heading display-4">
          <h3 className="panel-title">
            {" "}
            Talks [{talks.length ? talks.length : 0}]
            <span className="pull-right clearfix move-right">
              <i
                className="glyphicon glyphicon-plus-sign glypcon white-link"
                onClick={setShowAddModal}
              ></i>
            </span>
          </h3>
        </div>
        <div className="panel-body">
          {loading ? (
            <Fragment>
              <div>
                <p>Loading...</p>
              </div>
            </Fragment>
          ) : (
            <>
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
                  <Button onClick={setShowAddModal}>Add Talk Data</Button>
                </div>
              )}
            </>
          )}
          {addModalShow ? (
            <AddTalkModal
              show={addModalShow}
              onHide={addModalClose}
              addtalk={addTalk}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default CTalks;
