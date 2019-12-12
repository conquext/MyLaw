import React, { Component } from "react";
import axios from "axios";

const AppContext = React.createContext();

export default class AppProvider extends Component {
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

  getSpeaker = speakerId => {
    let tempAttendees = [...this.state.attendees];

    const speaker = tempAttendees.find(attendee => attendee.id == speakerId);
    return speaker;
  };

  deleteTalk = id => {
    console.log("id", id);
    try {
      axios
        .delete(`/api/v1/talks/${id}`)
        .then(res => res.data)
        .then(talks => {
          this.setState({ loading: false, talks });
        });
    } catch (error) {
      this.setState({ error });
    }
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

  fetchTalks = async () => {
    let res = await axios.get(`/api/v1/talks`);
    let record = res.data;
    let talks = record.data;
    return talks;
  };

  fetchAttendees = async () => {
    let res = await axios.get(`/api/v1/attendees`);
    let record = res.data;
    let attendees = record.data;
    // this.setState({ attendees });
    return attendees;
  };

  setShowModal = e => {
    e.preventDefault();
    this.setState({ addModalShow: true });
  };

  addModalClose = () => this.setState({ addModalShow: false });

  async UNSAFE_componentWillMount() {
    console.log("will mount", this.state);

    // await this.setState({ loading: true });
    // await (() => {
    //   this.fetchData();
    // })();
    // await this.setState({ loading: false });
    //   if (this._isMounted) {
    //     this.fetchAttendees();
    //   }
  }

  async componentDidMount() {
    this._isMounted = true;
    this.setState({ loading: true });

    console.log("data", this.fetchTalks(), this.fetchAttendees());
    this.setState({
      loading: false,
      talks: this.fetchTalks(),
      attendees: this.fetchAttendees()
    });

    console.log("did mount state", this.state);
  }

  //   componentWillUnmount() {
  //     this._isMounted = false;
  //   }

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          getTalk: this.getTalk,
          getTalks: this.getTalks,
          getAttendee: this.getAttendee,
          getAttendees: this.getAttendees,
          assignTalk: this.assignTalk,
          deleteTalk: this.deleteTalk,
          setShowModal: this.setShowModal,
          addModalClose: this.addModalClose,
          getSpeaker: this.getSpeaker,
          fetchTalks: this.fetchTalks,
          fetchAttendees: this.fetchAttendees
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppConsumer = AppContext.Consumer;

export function withAppConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <AppConsumer>
        {value => <Component {...props} context={value} />}
      </AppConsumer>
    );
  };
}

export { AppProvider, AppConsumer, AppContext };
