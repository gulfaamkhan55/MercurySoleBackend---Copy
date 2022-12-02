import Joi from "joi";

const add = {
  body: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    phone: Joi.string().required(),
    projectCategory: Joi.string(),
    country: Joi.string(),
    message: Joi.string(),
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
    projectCategory: Joi.string(),
    country: Joi.string(),
    message: Joi.string(),description: Joi.string(),
  }),
};

export default {
  add,
  id,
  update,
};
