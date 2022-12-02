import Joi from "joi";

  const add={
    body: Joi.object().keys({
      title: Joi.string().required(),
      imageUrl: Joi.string().required(),
      description: Joi.string().required(),
      color: Joi.string().required(),
      technologyId: Joi.string().required()
    }),
  }
  const id= {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }

 const email= {
    params: Joi.object().keys({
      id: Joi.string().email().required(),
    }),
  }

 const update= {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
    body: Joi.object().keys({
      title: Joi.string().required(),
      imageUrl: Joi.string().required(),
      description: Joi.string().required(),
      color: Joi.string().required(),
      technologyId: Joi.string().required()
    }),
  }


export default {
  add,
  id,
  update,
  email,
  
};

