import React from "react";
import { Segment, Container, Header } from "semantic-ui-react";

import CHeader from "./CHeader";
import CTalks from "./CTalks";
import CAttendees from "./CAttendees";
import Footer from "./Footer";

export default class Boilerplate extends React.Component {
  render() {
    return (
      <div className="boilerplate">
        <CHeader className="c-header" />
        <div className="c-container">
          <CTalks />
          <Segment.Group>
            <CAttendees />
          </Segment.Group>
        </div>
        <Footer className="c-footer" />
      </div>
    );
  }
}
