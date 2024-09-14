import Session from "../schema/sessionsSchema.js";


export const createSession = async (req, res) => {
  try {
    const { unitId, title, lectures } = req.body;
    const newSession = new Session({ unitId, title, lectures });
    await newSession.save();
    res.status(201).json(newSession);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.find().populate('unitId').populate('lectures');
    res.status(200).json(sessions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const getSessionById = async (req, res) => {

  try {
    const sessionId = req.params.id;

    const session = await Session.find({unitId:sessionId}).populate('unitId')
    console.log(session)
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }
    res.status(200).json(session);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


