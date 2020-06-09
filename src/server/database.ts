import mongoose from "mongoose";

const databaseUrl = process.env.MONGO_DATABASE || "mongodb://database:27017/diary";

const databaseConnect = () => (
  mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
);

export default databaseConnect;