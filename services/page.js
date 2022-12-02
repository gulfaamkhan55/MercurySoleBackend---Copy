import PageModel from "../models/page.js";
import ServiceModel from "../models/service.js";
import IptvModel from "../models/iptv.js";
import CareerModel from "../models/career.js";
import JobcardModel from "../models/jobcard.js";

const Service = {
  getpage: async (req) => {
    try {
      console.log(req, "req");

      const pageText = await PageModel.aggregate([
        {
          $facet: {
            PageText: [
              {
                $match: {
                  title: req,
                },
              },
              {
                $lookup: {
                  from: "pagetexts",
                  localField: "_id",
                  foreignField: "pageId",
                  as: "PageText",
                },
              },
            ],
          },
        },
      ]);
      if (req === "pageone" || req === "pagethree" || req === "pagefour") {
        const services = await ServiceModel.aggregate([
          {
            $lookup: {
              let: { service_id: "$_id" },
              from: "technologies",
              pipeline: [
                { $match: { $expr: { $eq: ["$$service_id", "$serviceId"] } } },
                {
                  $lookup: {
                    let: { technology_id: "$_id" },
                    from: "projects",
                    pipeline: [
                      {
                        $match: {
                          $expr: { $eq: ["$$technology_id", "$technologyId"] },
                        },
                      },
                    ],
                    as: "projects",
                  },
                },
              ],
              as: "technologies",
            },
          },
        ]);

        const PageData = pageText[0].PageText;
        return { message: "success", data: { PageData, services } };
      } else if (req === "pagetwo") {
        const PageData = pageText[0].PageText;
        return { message: "success", data: PageData };
      } else if (req === "pagefive") {
        const PageData = pageText[0].PageText;
        const iptv = await IptvModel.find();
        return { message: "success", data: {PageData, iptv} };
      } else if (req === "pagesix") {
        const PageData = pageText[0].PageText;
        const careers = await CareerModel.find();
        const jobcards = await JobcardModel.find();
        return { message: "success", data: {PageData, careers, jobcards} };
      }

      // if (pagedata.pageName === "pagetwo") {
      //   const allData = {
      //     pageData: pagedata,
      //   };
      //   return { message: "success", data: allData };
      // }

      // if (pagedata.pageName === "pagethree") {
      //   const sercivesdata = await SercivesModel.aggregate([
      //     {
      //       $lookup: {
      //         let: { service_id: "$_id" },
      //         from: "tecnologies",
      //         pipeline: [
      //           { $match: { $expr: { $eq: ["$$service_id", "$service_id"] } } },
      //         ],
      //         as: "tecnologies",
      //       },
      //     },
      //   ]);

      //   const allData = {
      //     pageData: pagedata,
      //     sercivesdata: sercivesdata,
      //   };
      //   return { message: "success", data: allData };
      // }
      // if (pagedata.pageName === "pagefour") {
      //   const catagoriesData = await CatagorieModel.aggregate([
      //     {
      //       $lookup: {
      //         let: { catagories_id: "$_id" },
      //         from: "catagories",
      //         pipeline: [
      //           {
      //             $match: {
      //               $expr: { $eq: ["$catagories_id", "$catagories_id"] },
      //             },
      //           },
      //         ],
      //         as: "Projects",
      //       },
      //     },
      //   ]);
      //   const allData = {
      //     pageData: pagedata,
      //     catagoriesData: catagoriesData,
      //   };
      //   return { message: "success", data: allData };
      // }

      // if (pagedata.pageName === "pagefive") {
      //   const IptvData = await IptvModel.find();
      //   const allData = {
      //     pageData: pagedata,
      //     IptvData: IptvData,
      //   };

      //   return { message: "success", data: allData };
      // }
      // if (pagedata.pageName === "pagesix") {
      //   const careerData = await CareerModel.find();
      //   const jobcardData = await JobcardModel.find();
      //   const allData = {
      //     pageData: pagedata,
      //     careerData: careerData,
      //     jobcardData: jobcardData,
      //   };

      //   return { message: "success", data: allData };
      // }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  add: async (body) => {
    try {
      const savedData = await PageModel.create(body);
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
