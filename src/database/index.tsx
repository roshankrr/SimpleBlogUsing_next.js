import mongoose from "mongoose";

const dbconnect= async()=>{
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/blog');
        console.log("Connection sucessfull");   
    } catch (error) {
        console.log("Something Went Wrong with database connection",error);
    }
}

export default dbconnect;