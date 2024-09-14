import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description:{
    type: String,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  units: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Unit'
  }],
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, { timestamps: true });

const Class = mongoose.model('Class', classSchema);

export default Class