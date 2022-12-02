import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  title: { type: String, required: true, maxlength: 50 },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true, maxlength: 500 },
  color: { type: String, required: true, maxlength: 50 },
});
export default mongoose.model("Iptv", schema);
