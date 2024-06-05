import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectToDatabase = async () => {
    try {
        // const conn = await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}}`);
        const conn = await mongoose.connect(`${process.env.MONGO_DB_URL}`);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("Error while connecting to MongoDB", error.message);
        process.exit(1);
    }
}

export default connectToDatabase;