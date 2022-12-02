import JobformModel from "../models/jobform.js";
import ApplicantModel from "../models/applicant.js";
import ApplicantService from "../services/applicant.js"
const Service = {
  getjobform: async () => {
    const allForms = await JobformModel.find().populate("applicantId");
    if (allForms) {
      return { message: "success", data: allForms };
    }
  },

  add: async (body) => {
    try {
      const userExist = await ApplicantService.getbyEmail(body.email);
      if (userExist) {
        console.log("User Exist: ", userExist);
        const savedData = await JobformModel.create({
            working: body.working,
            noticePeriod: body.noticePeriod,
            lastWorkingDay: body.lastWorkingDay,
            description: body.description,
            applicantId: userExist.data._id
        });
        if (savedData) {
          return { message: "success", data: savedData };
        }
        return { message: "success", data: savedMessage };
      } else {
        const createApplicant = await ApplicantModel.create({
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
          phone: body.phone,
        });
        if (createApplicant) {
          const savedData = await JobformModel.create({
            working: body.working,
            noticePeriod: body.noticePeriod,
            lastWorkingDay: body.lastWorkingDay,
            description: body.description,
            applicantId: createApplicant._id
          });
          if (savedData) {
            return { message: "success", data: savedData };
          }
        }
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getbyId: async (body) => {
    try {
      console.log(body);
      const user = await JobformModel.findById(body);

      if (user) {
        return { message: "success", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  updateJobForm: async (id, body) => {
    try {
      console.log(id, body);

      const user = await JobformModel.findByIdAndUpdate(id, body);

      if (user) {
        return { message: "success", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  deleteJobForm: async (id) => {
    try {
      const user = await JobformModel.findByIdAndDelete(id);
      if (user) {
        return { message: "Deleted successfully", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default Service;
