import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  projectCategory: { type: String, maxlength: 50 },
  country: { type: String, maxlength: 50 },
  applicantId: {type: mongoose.Schema.Types.ObjectId, ref:"Applicant" }
});
export default mongoose.model("ProjectQuote", schema);
