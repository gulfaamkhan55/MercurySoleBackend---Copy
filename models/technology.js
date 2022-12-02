import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  // name: { type: String, required: true, maxlength: 50 },
  title: { type: String, required: true, maxlength: 50 },
  imageUrl: { type: String, required: true },
  color: { type: String, required: true, maxlength: 50 },  
  serviceId:{type: mongoose.Schema.Types.ObjectId, ref:"Service", required:true },   
});
export default mongoose.model("Technology", schema);
