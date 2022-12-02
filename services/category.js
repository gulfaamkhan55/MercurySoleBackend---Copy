import CategoryModel from "../models/catagories.js";

const Service = {
  getAll: async () => {
    try {
      const data = await CategoryModel.find();

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  add: async (body) => {
    try {
      const savedData = await CategoryModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  aggregation: async (id) => {
    try {
      const data = await CategoryModel.aggregate([
        
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
      const user = await CategoryModel.findById(body);

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

      const user = await CategoryModel.findByIdAndUpdate(id, body);

      if (user) {
        return { message: "success", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  deleteUser: async (id) => {
    try {
      const user = await CategoryModel.findByIdAndDelete(id);
      if (user) {
        return { message: "Deleted successfully", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default Service;
