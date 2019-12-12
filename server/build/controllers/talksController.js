"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("@babel/runtime/regenerator/index.js"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass.js"));

var _db = require("../db");

var _response = _interopRequireDefault(require("../utils/response"));

var _search = _interopRequireDefault(require("../helpers/search"));

var errorResponse = _response["default"].errorResponse,
    successResponse = _response["default"].successResponse;

var returnActualData = function returnActualData(data) {
  return data.filter(function (datum) {
    return !datum.deleted;
  });
};
/**
 * Talks representing the Talks controller
 * @class TalksController
 * @description Talk Controller
 */


var TalkController =
/*#__PURE__*/
function () {
  function TalkController() {
    (0, _classCallCheck2["default"])(this, TalkController);
  }

  (0, _createClass2["default"])(TalkController, null, [{
    key: "addTalk",

    /**
     * Add a talk
     * Route: POST: api/v1/talks
     * @param {object} req - HTTP Request object
     * @param {object} res - HTTP Response object
     * @return {res} res - HTTP Response object
     * @memberof TalkController
     */
    value: function addTalk(req, res) {
      var _req$body, topic, _req$body$speakerId, speakerId, newId, newTalk;

      return _index["default"].async(function addTalk$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, topic = _req$body.topic, _req$body$speakerId = _req$body.speakerId, speakerId = _req$body$speakerId === void 0 ? null : _req$body$speakerId;
              newId = _db.talks[_db.talks.length - 1].id + 1;

              if (!(_search["default"].find(_db.talks, "topic", topic).length > 0)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", errorResponse(res, 409, "Duplicate topic"));

            case 5:
              newTalk = {
                id: newId,
                topic: topic
              };
              if (speakerId) newTalk.speakerId = speakerId;

              _db.talks.push(newTalk);

              return _context.abrupt("return", successResponse(res, 200, "New talk added successfully", returnActualData(_db.talks)));

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", errorResponse(res, 500, [_context.t0]));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 11]]);
    }
    /**
     * Get a talk
     * Route: GET: api/v1/talks/:id
     * @param {object} req - HTTP Request object
     * @param {object} res - HTTP Response object
     * @return {res} res - HTTP Response object
     */

  }, {
    key: "getTalk",
    value: function getTalk(req, res) {
      var talkId, talkFound, speakerId;
      return _index["default"].async(function getTalk$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              talkId = parseInt(req.params.id, 10);
              talkFound = null;

              if (req.query.speakerId) {
                speakerId = req.query.speakerId;
                talkFound = _search["default"].find(_db.talks, "speakerId", parseInt(speakerId, 10));
              } else {
                talkFound = _search["default"].find(_db.talks, "id", talkId);
              }

              if (!(talkFound.length >= 1)) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return", successResponse(res, 200, "Talk data retrieved successfully", talkFound));

            case 6:
              return _context2.abrupt("return", errorResponse(res, 404, "No talk data found"));

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", errorResponse(res, 500, [_context2.t0]));

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 9]]);
    }
    /**
     * Get all talks
     * Route: GET: api/v1/talks
     * @param {object} req - HTTP Request object
     * @param {object} res - HTTP Response object
     * @return {res} res - HTTP Response object
     * @memberof TalkController
     */

  }, {
    key: "getAllTalks",
    value: function getAllTalks(req, res) {
      var talksFound;
      return _index["default"].async(function getAllTalks$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              talksFound = [];

              _db.talks.map(function (talk) {
                if (!talk.deleted) {
                  talksFound.push(talk);
                }

                return talksFound;
              });

              if (!(talksFound.length === 1)) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", successResponse(res, 200, "A single talk data", talksFound));

            case 5:
              if (!(talksFound.length > 1)) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt("return", successResponse(res, 200, "Talks data", talksFound));

            case 7:
              if (!(talksFound.length < 1)) {
                _context3.next = 9;
                break;
              }

              return _context3.abrupt("return", errorResponse(res, 404, "No talk data found"));

            case 9:
              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", errorResponse(res, 500, [_context3.t0]));

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 11]]);
    }
    /**
     * Update a talk
     * Route: PATCH: api/v1/talks/:id
     * @param {object} req - HTTP Request object
     * @param {object} res - HTTP Response object
     * @return {res} res - HTTP Response object
     * @memberof TalkController
     */

  }, {
    key: "updateTalk",
    value: function updateTalk(req, res) {
      var thisId, _req$body$speakerId2, speakerId, talkFound, speakerFound;

      return _index["default"].async(function updateTalk$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              thisId = parseInt(req.params.id, 10);
              _req$body$speakerId2 = req.body.speakerId, speakerId = _req$body$speakerId2 === void 0 ? null : _req$body$speakerId2;
              talkFound = _db.talks.filter(function (talk) {
                return !talk.deleted && talk.id === thisId;
              });

              if (!(Object.keys(talkFound).length === 0)) {
                _context4.next = 6;
                break;
              }

              return _context4.abrupt("return", errorResponse(res, 404, "No talk data found"));

            case 6:
              if (!speakerId) {
                _context4.next = 11;
                break;
              }

              speakerFound = _search["default"].find(_db.attendees, "id", speakerId);

              if (!(speakerFound.length < 1)) {
                _context4.next = 10;
                break;
              }

              return _context4.abrupt("return", errorResponse(res, 404, "Speaker not found"));

            case 10:
              talkFound[0].speakerId = req.body.speakerId;

            case 11:
              return _context4.abrupt("return", successResponse(res, 200, "Speaker assigned successfully", talkFound));

            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](0);
              console.log(_context4.t0); // return errorResponse(res, 500, [error]);

            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[0, 14]]);
    }
    /**
     * Remove a talk
     * Route: DELETE: api/v1/talks/:id
     * @param {object} req - HTTP Request object
     * @param {object} res - HTTP Response object
     * @return {res} res - HTTP Response object
     * @memberof TalkController
     */

  }, {
    key: "removeTalk",
    value: function removeTalk(req, res) {
      var thisId, talkFound;
      return _index["default"].async(function removeTalk$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              thisId = parseInt(req.params.id, 10);
              talkFound = _db.talks.filter(function (talk) {
                return !talk.deleted && talk.id === thisId;
              });

              if (!(Object.keys(talkFound).length === 0)) {
                _context5.next = 5;
                break;
              }

              return _context5.abrupt("return", errorResponse(res, 404, "No talk data found"));

            case 5:
              talkFound[0].deleted = true;
              return _context5.abrupt("return", successResponse(res, 200, "Talk deleted successfully"));

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](0);
              return _context5.abrupt("return", errorResponse(res, 500, [_context5.t0]));

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[0, 9]]);
    }
  }]);
  return TalkController;
}();

var _default = TalkController;
exports["default"] = _default;