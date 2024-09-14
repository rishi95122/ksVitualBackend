import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  unitId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Unit',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  lectures: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lecture'
  }]
}, { timestamps: true });

const Session = mongoose.model('Session', sessionSchema);

export default Session