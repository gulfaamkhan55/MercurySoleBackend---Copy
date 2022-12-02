import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import authenticate from "../middlewares/authenticate.js";
import forms from "multer";
import { protectedRouter, unProtectedRouter } from "../routes/index.js";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import technologieRoute from "../routes/tecnologies/index.js";

export default async function expressLoader({ app }) {
  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser({ limit: "5mb" }));
  app.use("/public", express.static("public"));
  app.use(bodyParser.json());
  // app.use("/api", authenticate);
  // app.use("/api", protectedRouter);

  app.use("/", unProtectedRouter);
}
