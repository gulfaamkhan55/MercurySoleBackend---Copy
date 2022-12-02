import Joi from "joi";

  const add={
    body: Joi.object().keys({
      title: Joi.string(),
      imageUrl: Joi.string(),
      description: Joi.string()
    }),
   
  }
  // const name= {
  //   params: Joi.object().keys({
  //     pagename:Joi.string().required(),
  //   }),
  // }

//   const email= {
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

