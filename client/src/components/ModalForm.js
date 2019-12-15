import React, { useState, useEffect } from "react";
import { Modal, Button, Container } from "react-bootstrap";
import EditTalkForm from "./EditTalkForm";
import AddTalkForm from "./AddTalkForm";
import AddAttendeeForm from "./AddAttendeeForm";

const ModalForm = props => {
  let form = "";

  if (props.form === "UpdateTalk") {
    form = <EditTalkForm {...props} />;
  }

  if (props.form === "AddNewTalk") {
    form = <AddTalkForm {...props} addtalk={props.addtalk} />;
  }

  if (props.form === "AddNewAttendee") {
    form = <AddAttendeeForm {...props} />;
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
