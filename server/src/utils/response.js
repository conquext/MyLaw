export default class Response {
  static errorResponse(res, statusCode, err) {
    return res.status(statusCode).json({
      status: "error",
      error: err
    });
  }

  static successResponse(res, statusCode, msg, data) {
    const resp = {
      status: "success",
      message: msg
    };

    data ? (resp.data = data) : "";
    return res.status(statusCode).json(resp);
  }
}
