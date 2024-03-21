import mongoose from 'mongoose'

const connectDB = async () => {
  try {
     await mongoose.connect(process.env.MONGO_URI as string, {})
  } catch (err) {
    process.exit(1)
  }
}
export default connectDB
