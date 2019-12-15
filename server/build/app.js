"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _index = _interopRequireDefault(require("./routes/index"));

var _path = _interopRequireDefault(require("path"));

_dotenv["default"].config();

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _cors["default"])());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
(0, _index["default"])(app);
app.use(_express["default"]["static"](_path["default"].resolve(__dirname, "../../client/public")));
app.get("/*", function (req, res) {
  res.sendFile(_path["default"].resolve(__dirname, "../../client/public/index.html"));
});
var PORT = process.env.PORT || 2000;
app.listen(PORT, console.info("server started on port ".concat(PORT)));