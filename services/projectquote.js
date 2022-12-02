import ProjectQuoteModel from "../models/projectquote.js";
import ApplicantModel from "../models/applicant.js";
import MessageModel from "../models/message.js";
import ApplicantService from "./applicant.js"

const Service = {
  getAll: async () => {
    try {
      const data = await ProjectQuoteModel.find().populate("applicantId");

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  add: async (body) => {
    try {
      const checkUser = await ApplicantService.getbyEmail(body.email);
      if (checkUser) {
        const savedMessage = await MessageModel.create({
          applicantId: checkUser.data._id,
          message: body.message,
        });
        return { message: "success", data: savedMessage };
      } else {
        const ApplicantData = await ApplicantModel.create({
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
          phone: body.phone,
        });
        const MessageData = await MessageModel.create({
          applicantId: ApplicantData._id,
          message: body.message,
        });
        const ProjectQuoteData = await ProjectQuoteModel.create({
          projectCategory: body.projectCategory,
          country: body.country,
          applicantId: ApplicantData._id,
        });
        if (ApplicantData && ProjectQuoteData && MessageData) {
          return {
            message: "success",
            data: { ProjectQuoteData, ApplicantData },
          };
        }
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getbyid: async (body) => {
    try {
      console.log(body);
      const user = await ProjectQuoteModel.findById(body);

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

      const user = await ProjectQuoteModel.findByIdAndUpdate(id, body);

      if (user) {
        return { message: "success", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  delete: async (id) => {
    try {
      const user = await ProjectQuoteModel.findByIdAndDelete(id);
      if (user) {
        return { message: "Deleted successfully", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default Service;
