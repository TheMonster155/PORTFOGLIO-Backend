const mongoose = require("mongoose");
require("dotenv").config();

const init = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);

    console.log("Database connection successful");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = init;
