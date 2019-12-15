import talks from "./talks";
import attendees from "./attendees";
// import userRoute from "./userRoute";

const routes = app => {
  attendees(app);
  talks(app);
  //   userRoute(app);
};
export default routes;
