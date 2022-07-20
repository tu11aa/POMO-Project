"use strict";

const helper = {};

helper.sendRes = (res, status, data, error = null) => {
  if (error) {
    res.status(status);
    throw new Error(error);
  }

  return res.status(status).json(data);
};

module.exports = helper;
