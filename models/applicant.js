import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true, maxlength: 50 },
  email: { type: String, required: true, maxlength: 50 },
  phone: { type: String, required: true },
});
export default mongoose.model("Applicant", schema);
