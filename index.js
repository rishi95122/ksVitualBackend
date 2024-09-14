import express from "express";
import authRoutes from "./routes/auth.js"
import classRoutes from "./routes/class.js"
import unitsRoutes from "./routes/units.js"
import sessionRoutes from "./routes/session.js"
import lectureRoutes from "./routes/lectures.js"
import commentRoutes from "./routes/comment.js"
import cors from "cors"
import cookieParser from "cookie-parser";
import connectDb from "./mongo.js";




const app =express()
const corsOptions = {

   origin: 'http://localhost:5173', 
  
   credentials: true, 
  
   allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  
   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  
  };
  app.use(cookieParser())
  app.use(cors(corsOptions));
  
app.use(express.json())
app.use("/api/auth",authRoutes)
app.use("/api/class",classRoutes)
app.use("/api/units",unitsRoutes)
app.use("/api/session",sessionRoutes)
app.use("/api/lecture",lectureRoutes)
app.use("/api/comment",commentRoutes)


app.listen(8800,(req,res)=>{
   connectDb()
   console.log("connected")
})