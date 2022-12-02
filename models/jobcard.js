import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  title: { type: String, required: true, maxlength: 50 },
  experience: { type: String, required: true },
  description: { type: String, required: true, maxlength: 500 },
  location: { type: String, required: true },
  imageUrl: { type: String, required: false},
  color: { type: String, required: true },
  skills: [
    { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Skill"
    }
  ],
});
export default mongoose.model("Jobcard", schema);
