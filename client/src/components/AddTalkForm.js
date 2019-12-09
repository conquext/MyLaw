import React from "react";

import {
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Select
} from "reactstrap";

class AddForm extends React.Component {
  state = {
    input: {
      topic: "",
      speaker: ""
    },
    errors: {}
  };

  onChange = e => {
    let updatedInput = { ...this.state.input };
    updatedInput[e.target.name] = e.target.value;
    this.setState({ input: updatedInput });
  };

  submitForm = e => {
    e.preventDefault();
  };

  render() {
    const { errors } = this.state;

    return (
      <Form onSubmit={this.submitForm}>
        <FormGroup>
          <Label for="topic">Topic</Label>
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
            <div classtopic="invalid-feedback">{errors.name}</div>
          )}
        </FormGroup>
        {/* <FormGroup>
          <Label for="speaker">Speaker</Label>
          <Select
            type="text"
            name="speaker"
            id="speaker"
            onChange={this.onChange}
            value={
              this.state.input.speaker === null ? "" : this.state.input.speaker
            }
          />
        </FormGroup> */}

        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddForm;
