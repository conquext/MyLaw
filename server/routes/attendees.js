import { AttendeesController } from "../controllers";
import Validation from "../middlewares/validation";

const { getAttendees, addAttendee, getAttendee, removeAttendees } = AttendeesController;
const { addAttendeeCheck } = Validation;

const attendeesRoute = app => {
  app.get("/api/v1/attendees/", getAttendees);
  app.get("/api/v1/attendees/:id", getAttendee);

  app.post("/api/v1/attendees/", addAttendeeCheck, addAttendee);
  app.delete("/api/v1/attendees/:id", removeAttendees);

  // app.post("/api/v1/attendees/:id/talk", addAttendeesToTalk);
};

export default attendeesRoute;
