import React from "react";
import ModalForm from "./ModalForm";

const AddAttendeeModal = props => {
  return (
    <ModalForm
      title="Add New Attendee"
      form="AddNewAttendee"
      show={props.show}
      onHide={props.onHide}
      addattendee={props.addattendee}
    />
  );
};

export default AddAttendeeModal;
