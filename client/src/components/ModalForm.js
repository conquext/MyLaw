import React, { useState, useEffect } from "react";
import { Modal, Button, Container } from "react-bootstrap";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import AddTalkForm from "./AddTalkForm";

const ModalForm = props => {
  let form = <AddForm addItemToState={props.addItemToState} />;

  if (props.form === "UpdateTalk") {
    form = <EditForm {...props} />;
  }

  if (props.form === "AddNewTalk") {
    form = <AddTalkForm {...props} />;
  }

  useEffect(() => {
    // props.onHide();
  }, []);

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
