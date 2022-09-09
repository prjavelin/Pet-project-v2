const mongoose = require("mongoose");

const ChoseSchema = new mongoose.Schema({
  CatDog: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ChoseDG", ChoseSchema);
