// !mdbgum ## Mongo Snippets for Node-js

const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    todo: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

//Export the model
mongoose.models = {};
module.exports = mongoose.model("Todos", todoSchema);
