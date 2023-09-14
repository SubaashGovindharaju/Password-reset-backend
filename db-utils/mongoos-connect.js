import mongoose from "mongoose";

import dotenv from 'dotenv';
dotenv.config();

const localMongoUrl='mongodb://localhost:27017/day-39-Nodejs'
const connectToDb = async () => {
    try {
        await mongoose.connect(localMongoUrl,
            {
                useNewUrlParser: true,
            });
        console.log("db Connecter successfully");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}
export default connectToDb;