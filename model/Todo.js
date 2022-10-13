const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
  },
  mean: {
    type: String,
    required: true,
  },
  sentence: {
    type: String,
    default: false,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
