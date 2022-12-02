import Joi from "joi";

  const add={
    body: Joi.object().keys({
       title: Joi.string(),
       subTitle: Joi.string(),
       imageUrl: Joi.string(),
      description1: Joi.string(),
      description2: Joi.string(),
      color: Joi.string(),
      pageId: Joi.string()
    }),
   
  }


export default {
  add
};

