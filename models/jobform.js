import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  working: {type: Boolean, required: false},  
  noticePeriod: {type: String, required: false, maxlength: 50},
  lastWorkingDay: {type: String, required: false, maxlength: 50},
  description: { type: String, required: false, maxlength: 50 },
  // file: {type: Object},
  applicantId: {type: mongoose.Schema.Types.ObjectId, ref: "Applicant"}
});
export default mongoose.model("Jobform", schema);
