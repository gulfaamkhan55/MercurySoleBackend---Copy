import Joi from "joi";

const add = {
  body: Joi.object().keys({    
    applicantId: Joi.string().required(),
    message: Joi.string().required(),
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
    applicantId: Joi.string().required(),
    message: Joi.string().required(),
  }),
};

export default {
  add,
  id,
  update,
};
