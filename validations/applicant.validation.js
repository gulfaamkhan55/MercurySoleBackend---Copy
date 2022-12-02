import Joi from "joi";

const add = {
  body: Joi.object().keys({
    // roll: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    phone: Joi.string().required(),
    message: Joi.string(),
    //  imageUrl: Joi.string(),
    // companyName: Joi.string(),
    // currentWorking: Joi.string(),
    // noticePeriod: Joi.string(),
    // lastworkingDay: Joi.string(),
    // discription: Joi.string(),
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
    // roll: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    phone: Joi.string().required(),
    message: Joi.string(),
    //  imageUrl: Joi.string(),
    // companyName: Joi.string(),
    // currentWorking: Joi.string(),
    // noticePeriod: Joi.string(),
    // lastworkingDay: Joi.string(),
    // discription: Joi.string(),
  }),
};

export default {
  add,
  id,
  update,
};
