const mongoose = require("mongoose");

const cakeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  discount:{
      type:Number,
      default:0,
    },
});

const Cake = mongoose.model("Cake", cakeSchema);

module.exports = Cake;

