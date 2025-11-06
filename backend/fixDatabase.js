import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const fixDatabase = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('MongoDB Connected');

        // Get the users collection
        const db = mongoose.connection.db;
        const usersCollection = db.collection('users');

        // Get all indexes
        const indexes = await usersCollection.indexes();
        console.log('Current indexes:', indexes);

        // Drop the email_1 index if it exists
        try {
            await usersCollection.dropIndex('email_1');
            console.log('✅ Successfully dropped email_1 index');
        } catch (error) {
            if (error.code === 27) {
                console.log('ℹ️  email_1 index does not exist');
            } else {
                throw error;
            }
        }

        // Show remaining indexes
        const remainingIndexes = await usersCollection.indexes();
        console.log('Remaining indexes:', remainingIndexes);

        console.log('✅ Database fixed successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error fixing database:', error.message);
        process.exit(1);
    }
};

fixDatabase();
