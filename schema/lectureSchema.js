import mongoose from "mongoose";


const lectureSchema = new mongoose.Schema({
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Session',
    required: true
  },
  contentUrl: {
    type: String,
    required: true
  },
 
}, { timestamps: true });

const Lecture = mongoose.model('Lecture', lectureSchema);

export default Lecture