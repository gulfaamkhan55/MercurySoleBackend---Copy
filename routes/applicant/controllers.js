import Applicant from "../../services/applicant.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  getAll: async (req, res) => {
    try {
      const data = await  Applicant.getAll();
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  add: async (req, res) => {
    //  if (req.file)
    //   req.body.imageUrl = `${req.protocol}://${req.get(
    //     "host"
    //   )}/${req.file.path.replace("\\", "/")}`;
    // console.log(req.body, "new body");
    const addResponse = await  Applicant.add(req.body);
    
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse.data);
     
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, addResponse.data);
    }
  },
  aggregate: async (req, res) => {
    try {
      const data = await  Applicant.aggregation();
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
     getbyid: async (req, res) => {
        
    const addResponse = await  Applicant.getbyid(req.params.id);
  
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse.data);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, addResponse.data);
    }
  },
   update: async (req, res) => {
   
    const addResponse = await  Applicant.update(req.params.id,req.body);
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse.data);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, addResponse.data);
    }
  },
   delete: async (req, res) => {
   
    const addResponse = await  Applicant.delete(req.params.id);
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse.data);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, addResponse.data);
    }
  },
}

export default controller;
