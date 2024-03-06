import app from "../app.js";
import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async() => {
    try {
        const mongoInstance = await mongoose.connect(process.env.MONGO_DB_URI);  
        app.on("error", (err) => {
            console.log("Error : ", err);
            process.exit(1);
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on PORT : ${process.env.PORT}`);
        });
        Promise.resolve();
    }
    catch(err) {
        console.log("MongoDB connection failed ", err);
        Promise.reject();
    }
}

export default connectDB;