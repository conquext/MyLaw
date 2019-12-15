import React from "react";
import { AppContext } from "../context";

import {
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input
} from "reactstrap";

class AddAttendeeForm extends React.Component {
  static contextType = AppContext;

  state = {
    input: {
      name: "",
      email: ""
    },
    loading: true,
    errors: {}
  };

  onChange = e => {
    let updatedInput = { ...this.state.input };
    updatedInput[e.target.name] = e.target.value;
    this.setState({ input: updatedInput });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.addattendee(this.state.input);
    this.props.onHide();
  };

  render() {
    return (
      <Form onSubmit={this.submitForm}>
        <FormGroup>
          <div>
            <Label for="topic">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              onChange={this.onChange}
              value={
                this.state.input.name === null ? "" : this.state.input.name
              }
            />
          </div>
          <div>
            <Label for="topic">Email</Label>
            <Input
              type="text"
              name="email"
              id="email"
              onChange={this.onChange}
              value={
                this.state.input.email === null ? "" : this.state.input.email
              }
            />
          </div>
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddAttendeeForm;
