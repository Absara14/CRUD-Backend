const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/user_crud")
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Connection Error:", err);
  });