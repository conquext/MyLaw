import { talks, attendees } from "../db";
import Response from "../utils/response";
import SearchHelper from "../helpers/search";

const { errorResponse, successResponse } = Response;

const returnActualData = data => {
  return data.filter(datum => !datum.deleted);
};

/**
 * Talks representing the Talks controller
 * @class TalksController
 * @description Talk Controller
 */
class TalkController {
  /**
   * Add a talk
   * Route: POST: api/v1/talks
   * @param {object} req - HTTP Request object
   * @param {object} res - HTTP Response object
   * @return {res} res - HTTP Response object
   * @memberof TalkController
   */
  static async addTalk(req, res) {
    try {
      const { topic, speakerId = null } = req.body;
      const newId = talks[talks.length - 1].id + 1;

      if (SearchHelper.find(talks, "topic", topic).length > 0) {
        return errorResponse(res, 409, "Duplicate topic");
      }

      const newTalk = { id: newId, topic: topic };

      if (speakerId) newTalk.speakerId = speakerId;
      talks.push(newTalk);

      return successResponse(
        res,
        200,
        "New talk added successfully",
        returnActualData(talks)
      );
    } catch (error) {
      return errorResponse(res, 500, [error]);
    }
  }

  /**
   * Get a talk
   * Route: GET: api/v1/talks/:id
   * @param {object} req - HTTP Request object
   * @param {object} res - HTTP Response object
   * @return {res} res - HTTP Response object
   */

  static async getTalk(req, res) {
    try {
      const talkId = parseInt(req.params.id, 10);
      let talkFound = null;

      if (req.query.speakerId) {
        const { speakerId } = req.query;
        talkFound = SearchHelper.find(
          talks,
          "speakerId",
          parseInt(speakerId, 10)
        );
      } else {
        talkFound = SearchHelper.find(talks, "id", talkId);
      }
      if (talkFound.length >= 1) {
        return successResponse(
          res,
          200,
          "Talk data retrieved successfully",
          talkFound
        );
      }
      return errorResponse(res, 404, "No talk data found");
    } catch (error) {
      return errorResponse(res, 500, [error]);
    }
  }

  /**
   * Get all talks
   * Route: GET: api/v1/talks
   * @param {object} req - HTTP Request object
   * @param {object} res - HTTP Response object
   * @return {res} res - HTTP Response object
   * @memberof TalkController
   */
  static async getAllTalks(req, res) {
    try {
      const talksFound = [];
      talks.map(talk => {
        if (!talk.deleted) {
          talksFound.push(talk);
        }
        return talksFound;
      });

      if (talksFound.length === 1) {
        return successResponse(res, 200, "A single talk data", talksFound);
      }
      if (talksFound.length > 1) {
        return successResponse(res, 200, "Talks data", talksFound);
      }
      if (talksFound.length < 1) {
        return errorResponse(res, 404, "No talk data found");
      }
    } catch (error) {
      return errorResponse(res, 500, [error]);
    }
  }

  /**
   * Update a talk
   * Route: PATCH: api/v1/talks/:id
   * @param {object} req - HTTP Request object
   * @param {object} res - HTTP Response object
   * @return {res} res - HTTP Response object
   * @memberof TalkController
   */
  static async updateTalk(req, res) {
    try {
      const thisId = parseInt(req.params.id, 10);

      const { speakerId = null } = req.body;

      const talkFound = talks.filter(
        talk => !talk.deleted && talk.id === thisId
      );

      if (Object.keys(talkFound).length === 0) {
        return errorResponse(res, 404, "No talk data found");
      }
      if (speakerId) {
        const speakerFound = SearchHelper.find(attendees, "id", speakerId);
        if (speakerFound.length < 1) {
          return errorResponse(res, 404, "Speaker not found");
        }
        talkFound[0].speakerId = req.body.speakerId;
      }

      return successResponse(
        res,
        200,
        "Speaker assigned successfully",
        talkFound
      );
    } catch (error) {
      console.log(error);
      // return errorResponse(res, 500, [error]);
    }
  }

  /**
   * Remove a talk
   * Route: DELETE: api/v1/talks/:id
   * @param {object} req - HTTP Request object
   * @param {object} res - HTTP Response object
   * @return {res} res - HTTP Response object
   * @memberof TalkController
   */
  static async removeTalk(req, res) {
    try {
      const thisId = parseInt(req.params.id, 10);

      const talkFound = talks.filter(
        talk => !talk.deleted && talk.id === thisId
      );

      if (Object.keys(talkFound).length === 0) {
        return errorResponse(res, 404, "No talk data found");
      }
      talkFound[0].deleted = true;

      return successResponse(res, 200, "Talk deleted successfully");
    } catch (error) {
      return errorResponse(res, 500, [error]);
    }
  }
}
export default TalkController;
