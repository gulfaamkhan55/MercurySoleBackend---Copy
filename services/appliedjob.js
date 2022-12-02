import AppliedJobsModel from "../models/appliedjobs.js";
import ApplicantModel from "../models/applicant.js";
import ApplicantService from "./applicant.js";
import MessageModel from "../models/message.js"

const Service = {
  getAll: async () => {
    try {
      const data = await AppliedJobsModel.find();

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  add: async (body) => {
    try {
      const checkUser = await ApplicantService.getbyEmail(body.email);
      if(checkUser){
        const savedMessage = await MessageModel.create({
          applicantId: checkUser.data._id,
          message: body.message
        });
        return { message: "success", data: savedMessage };
      }else {
        const ApplicantData = await ApplicantModel.create({
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
          phone: body.phone,
        });
        const AppliedJobData = await AppliedJobsModel.create({
          currentWorking: body.currentWorking,
          noticePeriod: body.noticePeriod,
          lastWorkingDay: body.lastWorkingDay,
          imageUrl: body.imageUrl,
          description: body.description,
          applicantId: ApplicantData._id
        });
        if (ApplicantData && AppliedJobData) {
          return { message: "success", data: { AppliedJobData, ApplicantData } };
        }
      }
      
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getbyid: async (body) => {
    try {
      console.log(body);
      const user = await AppliedJobsModel.findById(body);

      if (user) {
        return { message: "success", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  update: async (id, body) => {
    try {
      console.log(id, body);

      const user = await AppliedJobsModel.findByIdAndUpdate(id, body);

      if (user) {
        return { message: "success", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  delete: async (id) => {
    try {
      const user = await AppliedJobsModel.findByIdAndDelete(id);
      if (user) {
        return { message: "Deleted successfully", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default Service;
