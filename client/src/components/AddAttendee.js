import React from "react";
import ModalForm from "./ModalForm";

const AddAttendee = props => {
  return (
    <ModalForm
      title="Add Attendee"
      form="AddAttendee"
      show={props.show}
      onHide={props.onHide}
    />
  );
};

export default AddAttendee;
