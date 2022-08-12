"use strict";

const httpStatus = require("http-status");
const helper = require("./helper");

const methodHelper = {};

methodHelper.createDocument = async (
  res,
  Model,
  data,
  callback = null,
  stop = null //stop because some funtion call sendRes in another step
) => {
  const model = await Model.create(data);
  if (model) {
    if (callback) await callback(model);
    if (!stop) helper.sendRes(res, httpStatus.CREATED, model);
  } else {
    if (!stop)
      helper.sendRes(res, httpStatus.BAD_REQUEST, null, "Invalid data");
  }
};

methodHelper.updateDocument = async (
  res,
  Model,
  modelName,
  id,
  data,
  isAuthorized = null
) => {
  const model = await Model.findById(id);
  if (!model) {
    helper.sendRes(res, httpStatus.BAD_REQUEST, null, `${modelName} not found`);
  }

  if (!(await isAuthorized(model))) {
    helper.sendRes(res, httpStatus.UNAUTHORIZED, null, "Not authorized");
  }

  const updatedModel = await Model.findByIdAndUpdate(id, data, {
    new: true,
  });

  helper.sendRes(res, httpStatus.OK, updatedModel);
};

methodHelper.deleteDocument = async (
  res,
  Model,
  modelName,
  id,
  isAuthorized = null
) => {
  const model = await Model.findById(id);
  if (!model) {
    helper.sendRes(res, httpStatus.BAD_REQUEST, null, `${modelName} not found`);
  }

  if (!isAuthorized(model)) {
    helper.sendRes(res, httpStatus.UNAUTHORIZED, null, "Not authorized");
  }

  const rs = await model.remove();

  helper.sendRes(res, httpStatus.OK, rs);
};

methodHelper.deleteByuserID = async (Model, modelName, userID) => {
  const models = await Model.find({ userID: userID });
  if (models.length === 0) {
    throw new Error(`${modelName} not found`);
  }

  //delete all task first
  await models.forEach(async (model) => {
    await model.remove();
  });
};

module.exports = methodHelper;
