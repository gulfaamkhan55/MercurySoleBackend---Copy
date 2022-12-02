import expressLoader from "./express.js";
import mongooseLoader from "./mongoose.js";
import swaggerLoader from "./swagger.js";

export default {
  expressLoader,
  mongooseLoader,
  init: async ({ expressApp }) => {
    await mongooseLoader();
    await swaggerLoader({ app: expressApp });
    await expressLoader({ app: expressApp });
  },
};
