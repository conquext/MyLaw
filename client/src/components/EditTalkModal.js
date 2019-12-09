import React from "react";
import ModalForm from "./ModalForm";

const EditTalkModal = props => {
  return (
    <ModalForm
      title="Assign Speaker To Talk"
      form="UpdateTalk"
      show={props.show}
      onHide={props.onHide}
      updatedobject={props.updatedObject}
    />
  );
};

export default EditTalkModal;
