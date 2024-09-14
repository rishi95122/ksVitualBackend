import dotenv from 'dotenv'
dotenv.config()
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs'

import User from "../schema/userSchema.js";


export const register = async (req, res) => {
  const { name, email, password, role } = req.body;
console.log(req.body)
  try {
  
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'email already in use' });
    }
    const salt = await bcrypt.genSalt(10);
  
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
     password: hashedPassword,
      role,
    });

    
    await newUser.save();

   return res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
   return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id},
      process.env.jwtkey, 
      { expiresIn: '1h' }    
    );

    res.cookie("access_token", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly:true,
      secure:true,
      sameSite: 'None'
    });
    
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};



export const logout = async (req, res) => {
	console.log("jdgfet",req.cookies.access_token)
	try {
			res.clearCookie("access_token", {
		httpOnly:true,
		secure:true,
		sameSite: 'None'});
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};



export const getme= async(req,res)=>{

  const {id} =req._id
 
  const data = await User.findById(id)
  console.log(data)
  return res.status(200).json(data)
}