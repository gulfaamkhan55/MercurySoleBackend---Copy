import Joi from "joi";

const schema = {
  add: {
    body: Joi.object().keys({
      title: Joi.string().required(),
      imageUrl: Joi.string(),
      color: Joi.string().required(),
      serviceId: Joi.string().required(),
    }),
    
  },
  id: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },

  email: {
    params: Joi.object().keys({
      id: Joi.string().email().required(),
    }),
  },

  update: {
    body: Joi.object().keys({
      title: Joi.string(),
      imageUrl: Joi.string(),
      color: Joi.string(),
      serviceId: Joi.string(),
    }),
  },
};

export default schema;
