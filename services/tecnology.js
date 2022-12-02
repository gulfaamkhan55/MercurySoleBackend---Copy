import TechModel from "../models/technology.js";

const Service = {
  getAll: async () => {
    try {
      const data = await TechModel.find().populate("service_id");

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  getall: async () => {
    try {
      const techdata = await TechModel.find().populate("service_id");
      // const servicedata = await ServicesModel.find();
      // const projectdata = await ProjectModel.find();

      const data = {
        technologies: techdata,
        // services: servicedata,
        // projects: projectdata,
      };

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  add: async (body) => {
    try {
      const savedData = await TechModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  aggregation: async (id) => {
    try {
      const data = await TechModel.aggregate([
        // {
        //   $lookup: {
        //     localField: "service_id",
        //     from: "services",
        //     foreignField: "_id",
        //     as: "Service",
        //   },
        // },
        {
          $lookup: {
            let: { service_id: "$service_id" },
            from: "services",
            pipeline: [
              { $match: { $expr: { $eq: ["$_id", "$$service_id"] } } },
            ],
            as: "service",
          },
        },
      ]);
      console.log(data);

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  getbyid: async (body) => {
    try {
      console.log(body);
      const user = await TechModel.findById(body);

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

      const user = await TechModel.findByIdAndUpdate(id, body);

      if (user) {
        return { message: "success", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  delete: async (id) => {
    try {
      const user = await TechModel.findByIdAndDelete(id);
      if (user) {
        return { message: "Deleted successfully", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default Service;
