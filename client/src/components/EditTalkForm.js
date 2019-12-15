import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { AppContext } from "../context";

class EditTalkForm extends React.Component {
  static contextType = AppContext;

  state = {
    id: "",
    input: {
      topic: "",
      speakerId: ""
    },
    dropdownOpen: false,
    errors: {}
  };

  toggle = () => this.setState({ dropdownOpen: !this.state.dropdownOpen });

  componentDidMount() {
    const output = this.props.updatedobject;
    const oldInput = {};
    oldInput.topic = output.topic;
    oldInput.speakerId = output.speakerId || "";

    this.setState({ id: output.id, input: oldInput });
  }

  onChange = e => {
    let updatedInput = { ...this.state.input };
    updatedInput[e.target.name] = e.target.value;
    this.setState({ input: updatedInput });
  };

  onSelectHandler = e => {
    let updatedInput = { ...this.state.input };
    updatedInput["speakerId"] = e.target.value;
    this.setState({ input: updatedInput });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.assigntalk(this.state.id, this.state.input.speakerId);
    this.props.onHide();
  };

  render() {
    const { errors, input } = this.state;
    const { attendees, getSpeaker } = this.context;

    const speaker = getSpeaker(input.speakerId);

    return (
      <Form onSubmit={this.submitForm}>
        <FormGroup>
          <Label for="last">Topic</Label>
          <Input
            type="text"
            name="topic"
            id="topic"
            onChange={this.onChange}
            value={
              this.state.input.topic === null ? "" : this.state.input.topic
            }
          />
          {errors.topic && (
            <div className="invalid-feedback">{errors.topic}</div>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="speaker">Speaker</Label>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              {speaker ? speaker.name : "Select speaker"}
            </DropdownToggle>
            <DropdownMenu onChange={this.onChange}>
              {attendees.map(attendee => (
                <DropdownItem
                  key={attendee.id}
                  name="speakerId"
                  value={attendee.id}
                  onClick={this.onChange}
                >
                  {attendee.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </FormGroup>

        <Button>Update</Button>
      </Form>
    );
  }
}

export default EditTalkForm;
