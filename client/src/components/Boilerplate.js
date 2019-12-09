import React from "react";
import { Segment, Container, Header } from "semantic-ui-react";

import CHeader from "./CHeader";
import CTalks from "./CTalks";
import CAttendees from "./CAttendees";

export default class Boilerplate extends React.Component {
  state = {
    title: "Show Subtitle",
    showSubtitle: undefined,
    subtitle: "Hi there"
  };
  handleToggleSubtitle = () => {
    this.setState(previousState => ({
      showSubtitle: !previousState.showSubtitle
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    let title;
    this.state.showSubtitle
      ? (title = "Hide Subtitle")
      : (title = "Show Subtitle");

    if (prevState.title !== title) {
      this.setState(() => ({ title }));
    }
  }

  render() {
    const { title, subtitle, showSubtitle } = this.state;
    return (
      <div>
        <CHeader className="c-header" />
        <div className="c-container">
          <CTalks />
          <Segment.Group>
            <CAttendees />
          </Segment.Group>
        </div>
      </div>
    );
  }
}
