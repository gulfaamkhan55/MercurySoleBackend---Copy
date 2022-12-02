import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  title: { type: String, maxlength: 50, required: false },
  imageUrl: { type: String, required: false },
  description: { type: String, required: false, maxlength: 50 },
});
export default mongoose.model("Page", schema);
