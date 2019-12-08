import { attendees } from "../db";
import Response from "../utils/response";
import SearchHelper from "../helpers/search";

const { errorResponse, successResponse } = Response;

/**
 * Attendees representing the Attendees controller
 * @class AttendeesController
 * @description Attendees Controller
 */
class AttendeesController {
  /**
   * Handles addition of attendees
   * Route: POST: api/v1/attendees
   * @param {object} req - HTTP Request object
   * @param {object} res - HTTP Response object
   * @return {res} res - HTTP Response object
   */

  static async addAttendee(req, res) {
    const id = attendees.length;

    try {
      const { name, email } = req.body;
      const newId = attendees[attendees.length - 1].id + 1;

      if (SearchHelper.find(attendees, "email", email).length > 0) {
        return errorResponse(res, 409, "Duplicate attendee");
      }

      const newAttendee = { id: newId, name, email };

      attendees.push(newAttendee);

      return successResponse(
        res,
        200,
        "New attendee added successfully",
        attendees
      );
    } catch (error) {
      return errorResponse(res, 500, [error]);
    }
  }

  /**
   * Get an attendee
   * Route: GET: api/v1/attendees/:id
   * @param {object} req - HTTP Request object
   * @param {object} res - HTTP Response object
   * @return {res} res - HTTP Response object
   */
  static async getAttendee(req, res) {
    try {
      const attendeeId = parseInt(req.params.id, 10);
      let attendeeFound = null;

      if (req.query.email) {
        const { email } = req.query;
        attendeeFound = SearchHelper.find(attendees, "email", email);
      } else {
        attendeeFound = SearchHelper.find(attendees, "id", attendeeId);
      }
      if (attendeeFound.length >= 1) {
        return successResponse(
          res,
          200,
          "Attendee retrieved successfully",
          attendeeFound
        );
      }
      return errorResponse(res, 404, "No attendee found");
    } catch (error) {
      return errorResponse(res, 500, [error]);
    }
  }

  /**
   * Get all attendees
   * Route: GET: api/v1/attendees
   * @param {object} req - HTTP Request object
   * @param {object} res - HTTP Response object
   * @return {res} res - HTTP Response object
   */
  static async getAttendees(req, res) {
    try {
      attendees.length > 0
        ? successResponse(res, 200, "Attendees Record", attendees)
        : errorResponse(res, 404, "No attendees found");
    } catch (error) {
      return errorResponse(res, 500, [error]);
    }
  }

  /**
   * Add attendees to talk
   * Route: POST: api/v1/attendees/talk:id
   * @param {object} req - HTTP Request object
   * @param {object} res - HTTP Response object
   * @return {res} res - HTTP Response object
   * @memberof AttendeesController
   */
  static async addAttendeesToTalk(req, res) {
    try {
    } catch (error) {}
  }
}
export default AttendeesController;
