import PageTextModel from "../models/pagetext.js";

const Service = {
  // getpagetext: async (req) => {
  //   try {
  //     console.log(req, "req");

  //     const pagedata = await PageTextModel.findOne({
  //       pageName: req,
  //     });
  //     //console.log(pagedata)

  //     if (pagedata.pageName === "pageone") {
  //       const catagoriesData = await PageTextModel.aggregate([
  //         {
  //           $lookup: {
  //             let: { catagories_id: "$_id" },
  //             from: "projects",
  //             pipeline: [
  //               {
  //                 $match: {
  //                   $expr: { $eq: ["$$catagories_id", "$catagories_id"] },
  //                 },
  //               },
  //             ],
  //             as: "Projects",
  //           },
  //         },
  //       ]);
  //       console.log(catagoriesData);
  //       const sercivesdata = await SercivesModel.aggregate([
  //         {
  //           $lookup: {
  //             let: { service_id: "$_id" },
  //             from: "tecnologies",
  //             pipeline: [
  //               { $match: { $expr: { $eq: ["$$service_id", "$service_id"] } } },
  //             ],
  //             as: "Tecnologies",
  //           },
  //         },
  //       ]);

  //       const allData = {
  //         pageData: pagedata,
  //         catagoriesData: catagoriesData,
  //         sercivesdata: sercivesdata,
  //       };
  //       return { message: "success", data: allData };
  //     }

  //     if (pagedata.pageName === "pagetwo") {
  //       const allData = {
  //         pageData: pagedata,
  //       };
  //       return { message: "success", data: allData };
  //     }

  //     if (pagedata.pageName === "pagethree") {
  //       const sercivesdata = await SercivesModel.aggregate([
  //         {
  //           $lookup: {
  //             let: { service_id: "$_id" },
  //             from: "tecnologies",
  //             pipeline: [
  //               { $match: { $expr: { $eq: ["$$service_id", "$service_id"] } } },
  //             ],
  //             as: "tecnologies",
  //           },
  //         },
  //       ]);

  //       const allData = {
  //         pageData: pagedata,
  //         sercivesdata: sercivesdata,
  //       };
  //       return { message: "success", data: allData };
  //     }
  //     if (pagedata.pageName === "pagefour") {
  //       const catagoriesData = await CatagorieModel.aggregate([
  //         {
  //           $lookup: {
  //             let: { catagories_id: "$_id" },
  //             from: "catagories",
  //             pipeline: [
  //               {
  //                 $match: {
  //                   $expr: { $eq: ["$catagories_id", "$catagories_id"] },
  //                 },
  //               },
  //             ],
  //             as: "Projects",
  //           },
  //         },
  //       ]);
  //       const allData = {
  //         pageData: pagedata,
  //         catagoriesData: catagoriesData,
  //       };
  //       return { message: "success", data: allData };
  //     }

  //     if (pagedata.pageName === "pagefive") {
  //       const IptvData = await IptvModel.find();
  //       const allData = {
  //         pageData: pagedata,
  //         IptvData: IptvData,
  //       };

  //       return { message: "success", data: allData };
  //     }
  //     if (pagedata.pageName === "pagesix") {
  //       const careerData = await CareerModel.find();
  //       const jobcardData = await JobcardModel.find();
  //       const allData = {
  //         pageData: pagedata,
  //         careerData: careerData,
  //         jobcardData: jobcardData,
  //       };

  //       return { message: "success", data: allData };
  //     }
  //   } catch (error) {
  //     return { message: "error", data: error.message };
  //   }
  // },

  add: async (body) => {
    try {
      const savedData = await PageTextModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  // getbyidUser: async (body) => {
  //   try {
  //     console.log(body);
  //     const user = await TechModel.findById(body);

  //     if (user) {
  //       return { message: "success", data: user };
  //     }
  //   } catch (error) {
  //     return { message: "error", data: error.message };
  //   }
  // },
  // updateUser: async (id, body) => {
  //   try {
  //     console.log(id, body);

  //     const user = await TechModel.findByIdAndUpdate(id, body);

  //     if (user) {
  //       return { message: "success", data: user };
  //     }
  //   } catch (error) {
  //     return { message: "error", data: error.message };
  //   }
  // },
  // deleteUser: async (id) => {
  //   try {
  //     const user = await TechModel.findByIdAndDelete(id);
  //     if (user) {
  //       return { message: "Deleted successfully", data: user };
  //     }
  //   } catch (error) {
  //     return { message: "error", data: error.message };
  //   }
  // },
};

export default Service;
