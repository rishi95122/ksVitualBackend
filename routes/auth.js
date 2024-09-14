import { register,login,logout, getme } from "../contollers/auth.js"
import express from "express"
import protectRoute from "../middleware/protectRoute.js";

const router =express()
  
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me",protectRoute, getme);
export default router;