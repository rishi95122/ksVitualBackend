import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  lectureId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lecture',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },

}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

export default  Comment