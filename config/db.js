import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Jomiloju:30032006@cluster0.zcqv7hd.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}