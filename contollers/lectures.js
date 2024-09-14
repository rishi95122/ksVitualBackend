import Lecture from "../schema/lectureSchema.js";


export const createLecture = async (req, res) => {
  try {
    const { sessionId,  contentUrl, comments } = req.body;
    const newLecture = new Lecture({ sessionId,  contentUrl, comments });
    await newLecture.save();
    res.status(201).json(newLecture);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



export const getLectureById = async (req, res) => {

  try {
    const lectureId = req.params.id;
    const lecture = await Lecture.find({sessionId:lectureId}).populate('sessionId')
    if (!lecture) {
      return res.status(404).json({ message: 'Lecture not found' });
    }
    res.status(200).json(lecture);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

