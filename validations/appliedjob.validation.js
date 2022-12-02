import Joi from "joi";

const add = {
  body: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    phone: Joi.string().required(),
    currentWorking: Joi.string(),
    noticePeriod: Joi.string(),
    lastWorkingDay: Joi.string(),
    imageUrl: Joi.string(),
    description: Joi.string(),
  }),
};
const id = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};
const update = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    phone: Joi.string().required(),
    currentWorking: Joi.string(),
    noticePeriod: Joi.string(),
    lastWorkingDay: Joi.string(),
    imageUrl: Joi.string(),
    description: Joi.string(),
  }),
};

export default {
  add,
  id,
  update,
};
