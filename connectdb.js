import mongoose from "mongoose";

const connectdb = async(DATABASE_URL)=>{
    try {
        const DB_OPTIONS = {
            dbName: `collage`,
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS)
        console.log(`Connected Successfully to DB`)
    } catch (error) {
        console.log(error)
    }
}

export default connectdb;
