import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  applicantId: { type: mongoose.Schema.Types.ObjectId, ref: "Applicant" },
  message: {type: String}

});
export default mongoose.model("Message", schema);
