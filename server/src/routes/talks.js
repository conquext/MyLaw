import { talksController } from "../controllers";
import Validation from "../middlewares/validation";

const { addTalksCheck, assignSpeakerCheck } = Validation;

const {
  getTalk,
  getAllTalks,
  addTalk,
  updateTalk,
  removeTalk
} = talksController;

const talkRoutes = app => {
  app.get("/api/v1/talks/:id", getTalk);
  app.get("/api/v1/talks/", getAllTalks);
  app.post("/api/v1/talks/", addTalksCheck, addTalk);
  app.patch("/api/v1/talks/:id", assignSpeakerCheck, updateTalk);
  app.delete("/api/v1/talks/:id", removeTalk);
};

export default talkRoutes;
