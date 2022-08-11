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

helper.deleteItemInArray = (arr, item, count = 1) => {
  const index = arr.indexOf(item);
  if (index > -1) arr.splice(index, count);
  return arr;
};

module.exports = helper;
