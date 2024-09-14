
import express from "express"
import { createLecture, getLectureById } from "../contollers/lectures.js";

const router = express.Router();

router.post('/', createLecture);



router.get('/:id', getLectureById);


export default router;