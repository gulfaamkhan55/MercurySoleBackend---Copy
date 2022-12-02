import Joi from "joi";

const add = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    experience: Joi.string().required(),
    description: Joi.string().required(),
    skills: Joi.array().required(),
    location: Joi.string().required(),
    color: Joi.string().required(),
    imageUrl: Joi.string()
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
    experience: Joi.string().required(),
    description: Joi.string().required(),
    skills: Joi.array().required(),
   // jobcard_id: Joi.array().items(Joi.object({ value1:Joi.string(),value2:Joi.string(),})),
    location: Joi.string().required(),
    color: Joi.string().required(),
    imageUrl: Joi.string()
  }),
};

export default {
  add,
  id,
  update,
};
