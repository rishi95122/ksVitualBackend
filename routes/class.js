import express from "express";
import {
  createClass,

  enrollClass,
  getAllClasses,
  getClassById,
} from "../contollers/class.js";

const router = express.Router();

router.post("/", createClass);
router.get("/", getAllClasses);
router.get("/:id", getClassById);
router.post("/enroll/:id", enrollClass);


export default router;
