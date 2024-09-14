import Comment from "../schema/commentsSchema.js";

export const createComment = async (req, res) => {
    try {
      const { lectureId, userId, content } = req.body;
      const newComment = new Comment({ lectureId, userId, content });
      await newComment.save();
      res.status(201).json(newComment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

 export const getCommentsByLectureId = async (req, res) => {
    try {
      const lectureId = req.params.lectureId;
      const comments = await Comment.find({ lectureId }).populate('userId').sort({ createdAt: -1 });;
      res.status(200).json(comments);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };