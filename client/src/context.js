import React, { Component } from "react";
import axios from "axios";

const TalksContext = React.createContext();

export default class TalksProvider extends Component {
  state = {
    talks: [],
    attendees: [],
    loading: true,
    addModalShow: false
  };

  getTalk = slug => {
    let tempTalks = [...this.state.talks];
    const talk = tempTalks.find(talk => talk.slug === slug);
    return talk;
  };

  getTalks = () => {
    return [...this.state.talks];
  };

  getAttendee = slug => {
    let tempAttendees = [...this.state.attendees];
    const attendee = tempAttendees.find(attendee => attendee.slug === slug);
    return attendee;
  };

  getAttendees = () => {
    return [...this.state.attendees];
  };

  assignTalk = (talkId, attendeeId) => {
    axios
      .patch(`/api/v1/talks/${talkId}`, {
        speakerId: attendeeId
      })
      .then(res => res.data)
      .then(talks => {
        this.setState({ loading: false, talks });
      });
  };

  //   handleChange = event => {
  //     const target = event.target;
  //     const value = event.type === "checkbox" ? target.checked : target.value;
  //     const name = event.target.name;
  //     this.setState(
  //       {
  //         [name]: value
  //       },
  //       this.filterRooms
  //     );
  //   };
  fetchTalks = () => {
    axios
      .get(`/api/v1/talks`)
      .then(res => res.data)
      .then(talks => {
        this.setState({ loading: false, talks });
      });
  };

  fetchAttendees = () => {
    axios
      .get(`/api/v1/attendees`)
      .then(res => res.data)
      .then(attendees => {
        this.setState({ loading: false, attendees });
      });
  };

  componentDidMount() {
    console.log("shit");
    this.fetchTalks();
    this.fetchAttendees();
  }

  render() {
    return (
      <TalksContext.Provider
        value={{
          ...this.state,
          getTalk: this.getTalk,
          getTalks: this.getTalks,
          getAttendee: this.getAttendee,
          getAttendees: this.getAttendees,
          assignTalk: this.assignTalk
        }}
      >
        {this.props.children}
      </TalksContext.Provider>
    );
  }
}

const TalksConsumer = TalksContext.Consumer;

export function withTalksConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <TalksConsumer>
        {value => <Component {...props} context={value} />}
      </TalksConsumer>
    );
  };
}

export { TalksProvider, TalksConsumer, TalksContext };
