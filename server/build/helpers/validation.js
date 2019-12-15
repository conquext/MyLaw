"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/* eslint-disable require-jsdoc */
var Validation =
/*#__PURE__*/
function () {
  function Validation() {
    (0, _classCallCheck2["default"])(this, Validation);
  }

  (0, _createClass2["default"])(Validation, null, [{
    key: "isEmpty",
    value: function isEmpty(value) {
      return value === null || value === undefined || (0, _typeof2["default"])(value) === "object" && Object.keys(value).length === 0 || typeof value === "string" && value.trim().length === 0;
    }
  }, {
    key: "isValidEmail",
    value: function isValidEmail(email) {
      var re = /^\S+@\S+[\.][0-9a-z]+$/;
      return re.test(email);
    }
  }, {
    key: "isValidName",
    value: function isValidName(name) {
      return name.length > 3;
    }
  }, {
    key: "isValidTopic",
    value: function isValidTopic(topic) {
      return topic.length > 3;
    }
  }, {
    key: "validateAttendee",
    value: function validateAttendee(attendeeDetails) {
      var errors = {};

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
        errors: errors,
        isValid: this.isEmpty(errors)
      };
    }
  }, {
    key: "validateTopic",
    value: function validateTopic(topic) {
      var errors = {};

      if (!topic) {
        errors.topic = "Topic cannot be empty";
      } else {
        if (!this.isValidTopic(topic)) {
          errors.topic = "Topic must contain at least 4 characters";
        }
      }

      return {
        errors: errors,
        isValid: this.isEmpty(errors)
      };
    }
  }, {
    key: "validateSpeaker",
    value: function validateSpeaker(speaker) {
      var errors = {};

      if (!speaker) {
        errors.speaker = "Speaker Id must be provided";
      }

      return {
        errors: errors,
        isValid: this.isEmpty(errors)
      };
    }
  }]);
  return Validation;
}();

exports["default"] = Validation;