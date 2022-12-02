const environment = {
  port: process.env.PORT || 2022,
  nodeEnv: process.env.NODE_ENV || "development",
  mongodbUri:
    process.env.DB_URI ||
    "mongodb+srv://aazamali:mercurysole@cluster0.fnkrpqw.mongodb.net/?retryWrites=true&w=majority",
  // mongodb://localhost:27017
  // mongodb+srv://aazamali:mercurysole@cluster0.fnkrpqw.mongodb.net/?retryWrites=true&w=majority
};

export default environment;
