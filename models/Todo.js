const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  breed: {
    type: String,
    required: true,
  },

  picture: {
    type: String,
    required: true,
  },

  // completed: {
  //   type: Boolean,
  //   required: true,
  // },
  userId: {
    type: String,
    required: true,
  },
});



module.exports = mongoose.model("Todo", TodoSchema);
