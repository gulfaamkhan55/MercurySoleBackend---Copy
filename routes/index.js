import express from "express";
import servicesRoute from "./service/index.js";
import technologieRoute from "./tecnologies/index.js";
import projectRoute from "./project/index.js";
// import catagoriesRoute from "./catagories/index.js";
import iptvRoute from "./iptv/index.js";
import careerRoute from "./career/index.js";
import jobcardRoute from "./jobcard/index.js";
import jobformRoute from "./jobform/index.js";
import pageoneRoute from "./page/index.js";
import applicantRoute from "./applicant/index.js";
import appliedJobsRoute from "./appliedjob/index.js";
import messageRoute from "./message/index.js";
import skillsRoute from "./skills/index.js";
import pagetextRoute from './pagetext/index.js'
import projectquoteRoute from './quoteproject/index.js'
// import swaggerJSDoc from "swagger-jsdoc";
// import swaggerUi from "swagger-ui-express"

// const options ={
//  definations:{
//   openapi:"3.0.0",
//   inf:{
//     title:"Node Js Api Project",
//     version:"1.0.0",
//   },
//   servers:[
//     {
//       api:'https://mercurysole.herokuapp.com/'
//     }
//   ]
//  },
//  apis:['./index.js']
// }
// const swaggerSpac = swaggerJSDoc(options);
// app.use('./api-docs', swaggerUi.serve, swaggerUi.setup(sw))
//routes
const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

unProtectedRouter.use("/page", pageoneRoute);
unProtectedRouter.use("/services", servicesRoute);
unProtectedRouter.use("/technologies", technologieRoute);
unProtectedRouter.use("/projects", projectRoute);
// unProtectedRouter.use("/catagories", catagoriesRoute);
unProtectedRouter.use("/iptv", iptvRoute);
unProtectedRouter.use("/career", careerRoute);
unProtectedRouter.use("/jobcard", jobcardRoute);
unProtectedRouter.use("/jobform", jobformRoute);
unProtectedRouter.use("/applicant", applicantRoute);
unProtectedRouter.use("/appliedjob", appliedJobsRoute);
unProtectedRouter.use("/message", messageRoute);
unProtectedRouter.use("/skills", skillsRoute);
unProtectedRouter.use("/pagetext", pagetextRoute);
unProtectedRouter.use("/quoteproject", projectquoteRoute);


export { protectedRouter, unProtectedRouter };
