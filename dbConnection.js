import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const DATABASE_URL = process.env.MONGO_URL

export default async function getDB() {
    await mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true,
    });
    console.log('Connected to database');
}
