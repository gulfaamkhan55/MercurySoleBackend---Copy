import SkillsModel from "../models/skill.js";

const Service = {
  getAll: async () => {
    try {
      // const data = await SkillsModel.find().populate("jobcard_id");
      const data = await SkillsModel.find().populate("jobcards");
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  add: async (body) => {
    try {
      const savedData = await SkillsModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  aggregation: async (id) => {
    try {
      const data = await SkillsModel.aggregate([
        
        {
          $lookup: {
            let: {  catagories_id: "$_id" },
            from: "projects",
            pipeline: [
              { $match: { $expr: { $eq: ["$$catagories_id", "$catagories_id"] } } },
            ],
            as: "Projects",
          },
        },
      ]);

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getbyidUser: async (body) => {
    try {
      console.log(body);
      const user = await SkillsModel.findById(body);

      if (user) {
        return { message: "success", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  updateUser: async (id, body) => {
    try {
      console.log(id, body);

      const user = await SkillsModel.findByIdAndUpdate(id, body);

      if (user) {
        return { message: "success", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  deleteUser: async (id) => {
    try {
      const user = await SkillsModel.findByIdAndDelete(id);
      if (user) {
        return { message: "Deleted successfully", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default Service;
