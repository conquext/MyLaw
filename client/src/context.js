import React, { Component } from "react";
import axios from "axios";

const AppContext = React.createContext();

export default class AppProvider extends Component {
  static _isMounted = false;
  state = {
    talks: [],
    attendees: [],
    loading: true,
    addModalShow: false,
    addAttendeeModalShow: false,
    editModalShow: false
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

  assignTalk = (talkId, attendeeId) => {
    try {
      axios
        .patch(`/api/v1/talks/${talkId}`, {
          speakerId: attendeeId
        })
        .then(res => res.data)
        .then(() => {
          this.fetchTalks();
        });
    } catch (error) {
      console.log(error);
    }
  };

  fetchTalks = () => {
    try {
      this.setState({ loading: true });

      axios
        .get(`/api/v1/talks`)
        .then(res => (res.data ? res.data : ""))
        .then(talks => {
          if (talks.data) {
            this._isMounted &&
              this.setState({ loading: false, talks: talks.data });
          } else
            this._isMounted && this.setState({ loading: false, talks: "" });
        });
    } catch (error) {
      console.log(error);
    }
  };

  fetchAttendees = () => {
    try {
      this.setState({ loading: true });
      axios
        .get(`/api/v1/attendees`)
        .then(res => res.data)
        .then(attendees => {
          this._isMounted &&
            this.setState({ loading: false, attendees: attendees.data });
        });
    } catch (error) {
      console.log(error);
    }
  };

  addTalk = data => {
    try {
      axios
        .post(`api/v1/talks/`, data)
        .then(res => res.data)
        .then(talks => {
          this.setState({ loading: false, talks: talks.data });
        });
    } catch (error) {
      this.setState({ error });
    }
  };

  addAttendee = data => {
    try {
      axios
        .post(`api/v1/attendees/`, data)
        .then(res => res.data)
        .then(attendees => {
          this.setState({ loading: false, attendees: attendees.data });
        });
    } catch (error) {
      this.setState({ error });
    }
  };

  deleteTalk = id => {
    try {
      axios
        .delete(`/api/v1/talks/${id}`)
        .then(res => (res.data ? res.data : ""))
        .then(() => {
          this.fetchTalks();
        });
    } catch (error) {
      this.setState({ error });
    }
  };

  deleteAttendee = id => {
    try {
      axios
        .delete(`/api/v1/attendees/${id}`)
        .then(res => (res.data ? res.data : ""))
        .then(() => {
          this.fetchAttendees();
        });
    } catch (error) {
      this.setState({ error });
    }
  };

  setShowAddModal = e => {
    e.preventDefault();
    this.setState({ addModalShow: true });
  };

  setShowAddAttendeeModal = e => {
    e.preventDefault();
    this.setState({ addAttendeeModalShow: true });
  };

  setShowEditModal = e => {
    e.preventDefault();
    this.setState({ editModalShow: true });
  };

  addModalClose = () => this.setState({ addModalShow: false });
  editModalClose = () => this.setState({ editModalShow: false });
  addAttendeeModalClose = () => this.setState({ addAttendeeModalShow: false });

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.fetchTalks();
    this._isMounted && this.fetchAttendees();
    this.setState({ loading: false });
  }

  componentWillUnMount() {
    this._isMounted = false;
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          getTalk: this.getTalk,
          getTalks: this.getTalks,
          getAttendee: this.getAttendee,
          getAttendees: this.getAttendees,
          addTalk: this.addTalk,
          addAttendee: this.addAttendee,
          assignTalk: this.assignTalk,
          deleteTalk: this.deleteTalk,
          deleteAttendee: this.deleteAttendee,
          setShowEditModal: this.setShowEditModal,
          setShowAddModal: this.setShowAddModal,
          addModalClose: this.addModalClose,
          addAttendeeModalClose: this.addAttendeeModalClose,
          addAttendeeModalShow: this.addAttendeeModalShow,
          setShowAddAttendeeModal: this.setShowAddAttendeeModal,
          editModalClose: this.editModalClose,
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
