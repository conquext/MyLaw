import Response from "../utils/response";
import Validation from "../helpers/validation";

const { errorResponse } = Response;

export default class ValidationMiddleware {
  static addAttendeeCheck(req, res, next) {
    const { errors, isValid } = Validation.validateAttendee(req.body);
    // Check validation
    if (!isValid) {
      return errorResponse(res, 400, errors);
    }
    next();
  }

  static addTalksCheck(req, res, next) {
    const { errors, isValid } = Validation.validateTopic(req.body.topic);
    // Check validation
    if (!isValid) {
      return errorResponse(res, 400, errors);
    }
    next();
  }

  static assignSpeakerCheck(req, res, next) {
    const { errors, isValid } = Validation.validateSpeaker(req.body.speakerId);

    if (!isValid) {
      return errorResponse(res, 400, errors);
    }
    next();
  }
}
