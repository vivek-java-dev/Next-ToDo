import { log } from "console";
import mongoose from "mongoose"

const connectMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to mongoDB")
    }catch(error){
        console.log(error);
        
    }
}
export default connectMongoDB;