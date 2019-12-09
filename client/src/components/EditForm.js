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

class EditForm extends React.Component {
  state = {
    id: "",
    input: {
      topic: "",
      speakerId: ""
    },
    errors: {}
  };

  componentDidMount() {
    const output = this.props.updatedobject;
    const oldInput = {};
    oldInput.topic = output.topic;
    oldInput.speakerId = output.speakerId;

    this.setState({ id: output.id, input: oldInput });
  }

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
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
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

        <Button>Update</Button>
      </Form>
    );
  }
}

export default EditForm;
