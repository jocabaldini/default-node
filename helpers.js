const { StatusCodes, getReasonPhrase } = require("http-status-codes")

const apiStatusCodes = {
  OK: {
    status: StatusCodes.OK,
    message: getReasonPhrase(StatusCodes.OK),
  },
  CREATED: {
    status: StatusCodes.CREATED,
    message: getReasonPhrase(StatusCodes.CREATED),
  },
  UNPROCESSABLE_ENTITY: {
    status: StatusCodes.UNPROCESSABLE_ENTITY,
    message: getReasonPhrase(StatusCodes.UNPROCESSABLE_ENTITY),
  },
  INTERNAL_SERVER_ERROR: {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
  },
}
module.exports = {
  getApiStatusCodes: () => apiStatusCodes,
  makeReturn: (statusCode, data) => ({ statusCode, data }),
}
