import mongoose, { Schema } from "mongoose";

interface IContents extends mongoose.Document {
  date: string,
  title: string,
  body: string
}

export const ContentsSchema = new Schema({
  date: String,
  title: String,
  body: String
});

const Contents = mongoose.model<IContents>("Contents", ContentsSchema);

export default Contents;