import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.MONGOOSE_URI}`)
        console.log(`\n MongoDb connected : ${connect.connection.host}`)


    } catch (error) {
        console.error("MongoDb connection failed : ",error)
        process.exit(1)
    }
}

export default connectDB