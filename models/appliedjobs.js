import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  currentWorking: { type: String, maxlength: 50 },
  noticePeriod: { type: String, maxlength: 50 },
  lastWorkingDay: { type: String },
  imageUrl:{ type: String },
  description: { type: String },
  applicantId: {type: mongoose.Schema.Types.ObjectId, ref:"Applicant" }
});
export default mongoose.model("AppliedJob", schema);
