import React from "react";
import ReactDOM from "react-dom";
import Boilerplate from "./components/Boilerplate";
import "normalize.css/normalize.css";
// import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:2001";

ReactDOM.render(<Boilerplate />, document.getElementById("app"));
