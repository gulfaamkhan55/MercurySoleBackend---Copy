import express from "express";
import authValidation from "../../validations/service.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./Images/services");
    console.log(req)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const router = express.Router();
router.get("/", controllers.getAll);
router.get("/technologies", controllers.aggregate);
router.post("/", upload.single("imageUrl"), validate(authValidation.add), controllers.add);
router.get("/:id", validate(authValidation.id), controllers.getbyid);
router.patch("/:id", validate(authValidation.update), controllers.update);
router.delete("/:id", controllers.delete);

export default router;
