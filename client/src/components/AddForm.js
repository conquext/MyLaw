import React from "react";

import {
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input
} from "reactstrap";

class AddForm extends React.Component {
  state = {
    input: {},
    errors: {}
  };

  onChange = e => {
    let updatedInput = { ...this.state.input };
    updatedInput[e.target.name] = e.target.value;
    this.setState({ input: updatedInput });
  };

  validate = input => {
    const errors = {};
    if (!Validator.isEmail(input.email)) errors.email = "Invalid email";
    if (!input.password) errors.password = "Can't be blank";
    return errors;
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
            <div className="invalid-feedback">{errors.topic}</div>
          )}
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddForm;
