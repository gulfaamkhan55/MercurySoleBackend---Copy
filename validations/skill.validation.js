import Joi from "joi";

const add = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    jobcards :Joi.array(),
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
    title: Joi.string().required(),
  }),
};

export default {
  add,
  id,
  update,
};
