import express from "express";
import authValidation from "../../validations/project.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";

import upload from "../../middlewares/upload.js";

const router = express.Router();
router.get("/", controllers.getAll);
router.get("/catagories", controllers.aggregate);
router.post("/", upload.single("imageUrl"), validate(authValidation.add), controllers.add);
router.get("/:id",validate(authValidation.id), controllers.getbyid);
router.patch("/:id", validate(authValidation.update),controllers.update );
router.delete("/:id",controllers.delete );

export default router;
