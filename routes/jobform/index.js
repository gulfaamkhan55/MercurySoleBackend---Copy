import express from "express";
import authValidation from "../../validations/jobform.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public");
    console.log(req);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
const router = express.Router();
router.post("/", upload.single('file'), controllers.add);
router.get("/", controllers.getAll)


export default router;
