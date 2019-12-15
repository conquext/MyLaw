/* eslint-disable require-jsdoc */
export default class Validation {
  static isEmpty(value) {
    return (
      value === null ||
      value === undefined ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
    );
  }

  static isValidEmail(email) {
    const re = /^\S+@\S+[\.][0-9a-z]+$/;
    return re.test(email);
  }

  static isValidName(name) {
    return name.length > 3;
  }

  static isValidTopic(topic) {
    return topic.length > 3;
  }

  static validateAttendee(attendeeDetails) {
    const errors = {};

    if (!attendeeDetails.name) {
      errors.name = "Name is required";
    } else if (!this.isValidName(attendeeDetails.name)) {
      errors.name = "Name must contain at least 4 characters";
    }

    if (!attendeeDetails.email) {
      errors.email = "Email is required";
    } else if (!this.isValidEmail(attendeeDetails.email)) {
      errors.email = "Email is invalid";
    }

    return {
      errors,
      isValid: this.isEmpty(errors)
    };
  }

  static validateTopic(topic) {
    const errors = {};

    if (!topic) {
      errors.topic = "Topic cannot be empty";
    } else {
      if (!this.isValidTopic(topic)) {
        errors.topic = "Topic must contain at least 4 characters";
      }
    }
    return {
      errors,
      isValid: this.isEmpty(errors)
    };
  }

  static validateSpeaker(speaker) {
    const errors = {};

    if (!speaker) {
      errors.speaker = "Speaker Id must be provided";
    }

    return {
      errors,
      isValid: this.isEmpty(errors)
    };
  }
}
