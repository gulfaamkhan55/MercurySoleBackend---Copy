import Joi from "joi";

  const add={
    body: Joi.object().keys({
      firstName:Joi.string().required(),
      lastName:Joi.string().required(),
      email: Joi.string(),
      phoneNum: Joi.string(),
      working: Joi.boolean(),      
      noticePeriod: Joi.string(),
      workingLastDay: Joi.string(),
      discription: Joi.string(),
      file: Joi.object({
        type: Joi.string().valid("/png", "/jpeg"),
        size: 20,
      }).unknown(true),
    }),
   
  }
  // const name= {
  //   params: Joi.object().keys({
  //     pagename:Joi.string().required(),
  //   }),
  // }

//  const email= {
//     params: Joi.object().keys({
//       id: Joi.string().email().required(),
//     }),
//   }

//  const update= {
//   params: Joi.object().keys({
//     id: Joi.string().required(),
//   }),
//     body: Joi.object().keys({
//       name: Joi.string().required(),
//       imageUrl: Joi.string().required(),
//       discription: Joi.string().required(),
//       color: Joi.string().required(),
//     }),
//   }


export default {
  add,
  // name,
  // update,
  // email,
  
};

