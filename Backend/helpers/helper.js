"use strict";

const helper = {};

helper.res = (success, data, message = null, stack = null) => {
  return {
    success,
    message,
    data,
    stack,
  };
};

helper.sendRes = (res, status, data, error = null) => {
  if (error) {
    res.status(status);
    throw new Error(error);
  }

  return res.status(status).json(helper.res(true, data));
};

module.exports = helper;
