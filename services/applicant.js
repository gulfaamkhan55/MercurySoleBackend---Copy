import ApplicantModel from "../models/applicant.js";
import MessageModel from "../models/message.js";

const Service = {
  getAll: async () => {
    try {
      const data = await ApplicantModel.find();

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  add: async (body) => {
    try {
      const userExist = await Service.getbyEmail(body.email);
      if (userExist) {
        console.log('User Exist: ', userExist);
        const savedMessage = await MessageModel.create({
          applicantId: userExist.data._id,
          message: body.message
        });
        return { message: "success", data: savedMessage };
      } else {
        const savedData = await ApplicantModel.create(body);
        if (savedData) {
          const re = await MessageModel.create({
            message: body.message,
            applicantId: savedData._id,
          });
          return { message: "success", data: savedData };
        }
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getbyid: async (body) => {
    try {
      console.log(body);
      const user = await ApplicantModel.findById(body);

      if (user) {
        return { message: "success", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  getbyEmail: async (email) => {
    try {
      const user = await ApplicantModel.findOne({email: email});
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

      const user = await ApplicantModel.findByIdAndUpdate(id, body);

      if (user) {
        return { message: "success", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  delete: async (id) => {
    try {
      const user = await ApplicantModel.findByIdAndDelete(id);
      if (user) {
        return { message: "Deleted successfully", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default Service;
