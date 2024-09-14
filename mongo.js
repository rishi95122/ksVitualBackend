import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const connectDb=()=>{
    mongoose.connect(process.env.MONGO_API).then(()=>{
        console.log("connected to mongo")
    }).catch(()=>{
        console.log("error")
    })
    
}

export default connectDb