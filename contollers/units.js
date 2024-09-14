import Unit from "../schema/unitSchema.js";

export const createUnit = async (req, res) => {
  try {
    const { classId, title, sessions } = req.body;
    const newUnit = new Unit({ classId, title, sessions });
    await newUnit.save();
    res.status(201).json(newUnit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllUnits = async (req, res) => {

  try {
    const units = await Unit.find().populate('classId')
    res.status(200).json(units);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



export const getUnitById = async (req, res) => {
 
  try {
    const unitId = req.params.id;
  
    const unit = await Unit.find({classId:unitId}).populate('classId')
    if (!unit) {
      return res.status(404).json({ message: 'Unit not found' });
    }
    res.status(200).json(unit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};




