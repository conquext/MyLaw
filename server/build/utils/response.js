"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Response =
/*#__PURE__*/
function () {
  function Response() {
    (0, _classCallCheck2["default"])(this, Response);
  }

  (0, _createClass2["default"])(Response, null, [{
    key: "errorResponse",
    value: function errorResponse(res, statusCode, err) {
      return res.status(statusCode).json({
        status: "error",
        error: err
      });
    }
  }, {
    key: "successResponse",
    value: function successResponse(res, statusCode, msg, data) {
      var resp = {
        status: "success",
        message: msg
      };
      data ? resp.data = data : "";
      return res.status(statusCode).json(resp);
    }
  }]);
  return Response;
}();

exports["default"] = Response;