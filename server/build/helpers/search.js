"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass.js"));

/* eslint-disable require-jsdoc */
var Search =
/*#__PURE__*/
function () {
  function Search() {
    (0, _classCallCheck2["default"])(this, Search);
  }

  (0, _createClass2["default"])(Search, null, [{
    key: "find",
    value: function find(Collections, searchKey, searchValue) {
      var result = null;

      if (searchKey === "topic") {
        result = Collections.filter(function (collection) {
          return !collection.deleted && collection[searchKey].includes(searchValue);
        });
      } else {
        result = Collections.filter(function (collection) {
          return !collection.deleted && collection[searchKey] == searchValue;
        });
      }

      return result;
    }
  }]);
  return Search;
}();

exports["default"] = Search;