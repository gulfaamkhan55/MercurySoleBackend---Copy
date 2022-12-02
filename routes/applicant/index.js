import express from "express";
import authValidation from "../../validations/applicant.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";

const router = express.Router();
router.get("/", controllers.getAll);
router.post("/", validate(authValidation.add), controllers.add);
router.get("/:id",validate(authValidation.id), controllers.getbyid);
router.patch("/:id", validate(authValidation.update),controllers.update );
router.delete("/:id",controllers.delete );

export default router;
