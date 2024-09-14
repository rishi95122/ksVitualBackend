import mongoose from "mongoose";

const unitSchema = new mongoose.Schema({
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  sessions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Session'
  }]
}, { timestamps: true });

const Unit = mongoose.model('Unit', unitSchema);

export default Unit
