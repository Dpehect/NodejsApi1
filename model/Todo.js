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
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
