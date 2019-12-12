import React from "react";
import ModalForm from "./ModalForm";

const AddTalkModal = props => {
  return (
    <ModalForm
      title="Add New Talk"
      form="AddNewTalk"
      show={props.show}
      onHide={props.onHide}
      addTalk={props.addTalk}
    />
  );
};

export default AddTalkModal;
