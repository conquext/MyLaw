import React from "react";
import { Modal, Button, Container } from "react-bootstrap";
import asyncComponent from "../hoc/asyncComponent";

const AsyncAddTalkForm = asyncComponent(() => {
  return import("./AddTalkForm");
});

const AsyncEditTalkForm = asyncComponent(() => {
  return import("./EditTalkForm");
});

const AsyncAddAttendeeForm = asyncComponent(() => {
  return import("./AddAttendeeForm");
});

const ModalForm = props => {
  let form = "";

  if (props.form === "UpdateTalk") {
    form = <AsyncEditTalkForm {...props} />;
  }

  if (props.form === "AddNewTalk") {
    form = <AsyncAddTalkForm {...props} addtalk={props.addtalk} />;
  }

  if (props.form === "AddNewAttendee") {
    form = <AsyncAddAttendeeForm {...props} />;
  }

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter wtf"
      className="fade"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>{form}</Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;
