import mongoose from "mongoose";

const dbconnect= async()=>{
    try {
        mongoose.connect(process.env.MONGODB_URI as string);
        console.log("Connection sucessfull");   
    } catch (error) {
        console.log("Something Went Wrong with database connection",error);
    }
}

export default dbconnect;