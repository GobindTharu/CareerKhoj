import mongoose from "mongoose";



const connectDb = async() => {
    try {
          const Uri = process.env.MONGO_URI;
        await mongoose.connect(Uri)

        console.log('Database Connection Established...')
        
      } catch (error) {
        console.log(error.message)
        console.log("Failed to connect Database")
        process.exit(1)
        
      }
}


export default connectDb