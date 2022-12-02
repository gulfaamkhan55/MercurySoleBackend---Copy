import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  title: { type: String, maxlength: 100, required: false },
  subTitle: { type: String, maxlength: 500, required: false },
  description1: { type: String, required: false, maxlength: 500 },
  description2: { type: String, required: false, maxlength: 500 },
  imageUrl: { type: String, required: false },
  color: { type: String, required: false },
  pageId: {type: mongoose.Schema.Types.ObjectId, ref: "Page" , required: false}
});
export default mongoose.model("Pagetext", schema);
