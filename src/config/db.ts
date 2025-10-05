import mongoose from "mongoose";
import colors from 'colors';


async function connectDB(){
    const databaseUri = process.env.DATABASE_URI
    try {
        if(!databaseUri) throw Error('Database URI not found...');

        const { connection } = await mongoose.connect(databaseUri);

        const url = `App connected to ${connection.host}:${connection.port}`;

        console.log(colors.magenta.bold(url));
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

export default connectDB;