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

class AddForm extends React.Component {
  static contextType = AppContext;

  state = {
    input: {
      topic: ""
    },
    loading: true,
    errors: {}
  };

  onChange = e => {
    let updatedInput = { ...this.state.input };
    updatedInput[e.target.name] = e.target.value;
    this.setState({ input: updatedInput, errors: this.validate(updatedInput) });
  };

  validate = input => {
    const errors = {};
    if (!input.topic) errors.topic = "Can't be blank";
    return errors;
  };

  submitForm = e => {
    e.preventDefault();
    this.props.addtalk(this.state.input);
    this.context.addModalClose();
  };

  render() {
    const { errors } = this.state;
    const { addModalClose } = this.context;

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
            <div className="invalid-feedback">{errors.topic}</div>
          )}
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddForm;
