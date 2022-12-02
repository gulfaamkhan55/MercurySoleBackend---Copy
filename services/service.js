import ServiceModel from "../models/service.js";

const Service = {
  getAll: async () => {
    try {
      const data = await ServiceModel.find();

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  add: async (body) => {
    try {
      const savedData = await ServiceModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  aggregation: async (id) => {
    try {
      const data = await ServiceModel.aggregate([
        {
          $lookup: {
            let: { service_id: "$_id" },
            from: "technologies",
            pipeline: [
              { $match: { $expr: { $eq: ["$$service_id", "$serviceId"] } } },
              {
                $lookup: {
                  let: {technology_id: "$_id"},
                  from: "projects",
                  pipeline: [
                    {$match: {$expr: {$eq: ["$$technology_id", "$technologyId"]}}},
                  ],
                  as: "projects"
                }
              }
            ],
            as: "technologies",
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
      const user = await ServiceModel.findById(body);

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

      const user = await ServiceModel.findByIdAndUpdate(id, body);

      if (user) {
        return { message: "success", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  delete: async (id) => {
    try {
      const user = await ServiceModel.findByIdAndDelete(id);
      if (user) {
        return { message: "Deleted successfully", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default Service;
