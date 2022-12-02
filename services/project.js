import ProjectModel from "../models/project.js";

const Service = {
  getAll: async () => {
    try {
      const data = await ProjectModel.find();

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  add: async (body) => {
    try {
      const savedData = await ProjectModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  aggregation: async (id) => {
    try {
      const data = await ProjectModel.aggregate([
        // {
        //   $lookup: {
        //     localField: "tecnologies_id",
        //     from: "tecnologies",
        //     foreignField: "_id",
        //     as: "genre",
        //   },
        // },
        {
          $lookup: {
            let: { catagories_id: "$catagories_id" },
            from: "catagories",
            pipeline: [
              { $match: { $expr: { $eq: ["$_id", "$$catagories_id"] } } },
            ],
            as: "catagories",
          },
        },
      ]);

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getbyid: async (body) => {
    try {
      console.log(body);
      const user = await ProjectModel.findById(body);

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

      const user = await ProjectModel.findByIdAndUpdate(id, body);

      if (user) {
        return { message: "success", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  delete: async (id) => {
    try {
      const user = await ProjectModel.findByIdAndDelete(id);
      if (user) {
        return { message: "Deleted successfully", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default Service;
