
import express from "express"
import { createComment, getCommentsByLectureId } from "../contollers/comment.js";

const router = express.Router();

router.post('/', createComment);


router.get('/lecture/:lectureId', getCommentsByLectureId);


export default router;