import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection
        connection.on('connected', () => {
            console.log('MongoDB database connection established successfully');
        })

        connection.on('error', (e) => {
            console.log('Mongodb connection error, please make sure db is up and running' + e);
            process.exit()
        })

    } catch(e) {
        console.log('Something went wrong in connecting to DB');
        console.log(e);
    }
}