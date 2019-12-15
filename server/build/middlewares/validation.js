"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _response = _interopRequireDefault(require("../utils/response"));

var _validation = _interopRequireDefault(require("../helpers/validation"));

var errorResponse = _response["default"].errorResponse;

var ValidationMiddleware =
/*#__PURE__*/
function () {
  function ValidationMiddleware() {
    (0, _classCallCheck2["default"])(this, ValidationMiddleware);
  }

  (0, _createClass2["default"])(ValidationMiddleware, null, [{
    key: "addAttendeeCheck",
    value: function addAttendeeCheck(req, res, next) {
      var _Validation$validateA = _validation["default"].validateAttendee(req.body),
          errors = _Validation$validateA.errors,
          isValid = _Validation$validateA.isValid; // Check validation


      if (!isValid) {
        return errorResponse(res, 400, errors);
      }

      next();
    }
  }, {
    key: "addTalksCheck",
    value: function addTalksCheck(req, res, next) {
      var _Validation$validateT = _validation["default"].validateTopic(req.body.topic),
          errors = _Validation$validateT.errors,
          isValid = _Validation$validateT.isValid; // Check validation


      if (!isValid) {
        return errorResponse(res, 400, errors);
      }

      next();
    }
  }, {
    key: "assignSpeakerCheck",
    value: function assignSpeakerCheck(req, res, next) {
      var _Validation$validateS = _validation["default"].validateSpeaker(req.body.speakerId),
          errors = _Validation$validateS.errors,
          isValid = _Validation$validateS.isValid;

      if (!isValid) {
        return errorResponse(res, 400, errors);
      }

      next();
    }
  }]);
  return ValidationMiddleware;
}();

exports["default"] = ValidationMiddleware;