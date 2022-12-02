import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  title: { type: String, required: true, maxlength: 50 },
  jobcards: [
    { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Jobcard"
    }
  ],
});
export default mongoose.model("Skill", schema);
