import JobcardModel from "../models/jobcard.js";
import SkillModel from "../models/skill.js";

const Service = {
  getAll: async () => {
    try {
      const data = await JobcardModel.find().populate("skills");      
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  add: async (body) => {
    try {
      const savedData = await JobcardModel.create(body);
      body.skills.map((sk) => {
          const query = { "_id": sk };
          const updateDocument = { $push: { "jobcards": savedData._id }};
          SkillModel.updateOne(query, updateDocument).then((res) => {
        });
      })
      
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getbyid: async (body) => {
    try {
      console.log(body);
      const user = await JobcardModel.findById(body);

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

      const user = await JobcardModel.findByIdAndUpdate(id, body);

      if (user) {
        return { message: "success", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  delete: async (id) => {
    try {
      const user = await JobcardModel.findByIdAndDelete(id);
      if (user) {
        return { message: "Deleted successfully", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default Service;
