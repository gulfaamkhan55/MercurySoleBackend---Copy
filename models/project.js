import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  // name: { type: String, required: true, maxlength: 50 },
  title: { type: String, required: true, maxlength: 50 },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true, maxlength: 500 },
  color: { type: String, required: true, maxlength: 50 },
  technologyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Technology",
    required: true,
  },
});
export default mongoose.model("Project", schema);
