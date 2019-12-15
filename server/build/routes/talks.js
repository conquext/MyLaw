"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _controllers = require("../controllers");

var _validation = _interopRequireDefault(require("../middlewares/validation"));

var addTalksCheck = _validation["default"].addTalksCheck,
    assignSpeakerCheck = _validation["default"].assignSpeakerCheck;
var getTalk = _controllers.talksController.getTalk,
    getAllTalks = _controllers.talksController.getAllTalks,
    addTalk = _controllers.talksController.addTalk,
    updateTalk = _controllers.talksController.updateTalk,
    removeTalk = _controllers.talksController.removeTalk;

var talkRoutes = function talkRoutes(app) {
  app.get("/api/v1/talks/:id", getTalk);
  app.get("/api/v1/talks/", getAllTalks);
  app.post("/api/v1/talks/", addTalksCheck, addTalk);
  app.patch("/api/v1/talks/:id", assignSpeakerCheck, updateTalk);
  app["delete"]("/api/v1/talks/:id", removeTalk);
};

var _default = talkRoutes;
exports["default"] = _default;