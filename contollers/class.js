import Class from "../schema/classSchema.js";
import User from "../schema/userSchema.js";

export const createClass = async (req, res) => {
console.log("Create class",req.body)
  try {
    const { title, admin, units, description, students } = req.body;
    const newClass = new Class({ title,description, admin, units, students });
    await newClass.save();
  
    return res.status(201).json(newClass);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getAllClasses = async (req, res) => {
 
  try {
    const classes = await Class.find()
 
   return res.status(200).json(classes);

  } catch (error) {
   return res.status(400).json({ message: error.message });
  }
};


export const getClassById = async (req, res) => {

  try {
    const classId = req.params.id;
    const singleClass = await Class.findById(classId)
    if (!singleClass) {
      return res.status(404).json({ message: 'Class not found' });
    }
    res.status(200).json(singleClass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const enrollClass = async (req, res) => {

const{user}=req.body
  try {
    const classId = req.params.id;

    const enrolled =await  User.findById(user?._id)
    enrolled.enrolledClasses.push(classId)
   
    await enrolled.save()
    console.log(enrolled)
    res.status(200).json(enrolled);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

