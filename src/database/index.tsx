import mongoose from "mongoose";

const dbconnect= async()=>{
    try {
        mongoose.connect('mongodb+srv://roshankumarcse26:PCblU3DGD9S4lLUb@cluster0.nez9chl.mongodb.net/');
        console.log("Connection sucessfull");   
    } catch (error) {
        console.log("Something Went Wrong with database connection",error);
    }
}

export default dbconnect;