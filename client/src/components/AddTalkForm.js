import React from "react";
import axios from "axios";
import Validator from "validator";

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
    console.log("updatedinput", this.state);
  };

  validate = input => {
    const errors = {};
    if (!input.topic) errors.topic = "Can't be blank";
    return errors;
  };

  submitForm = e => {
    console.log(e);
    e.preventDefault();
    // try {
    //   axios
    //     .post(`/api/v1/talks/`, {
    //       topic: this.state.topic
    //     })
    //     .then(res => res.data)
    //     .then(talks => {
    //       this.setState({ loading: false });
    //     });
    // } catch (error) {
    //   this.setState({ error });
    // }
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
