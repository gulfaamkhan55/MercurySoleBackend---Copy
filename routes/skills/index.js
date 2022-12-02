import express from "express";
import authValidation from "../../validations/skill.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";

const router = express.Router();
router
  .route("/")
  .get(controllers.getAll)
  .post(validate(authValidation.add), controllers.add);
router.get("/:id", controllers.getbyid);
router.patch("/update", validate(authValidation.update), controllers.update);
router.delete("/delete", controllers.delete);

export default router;
