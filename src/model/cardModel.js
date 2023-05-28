const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  cardNumber: {
    type: String,
    auto: generated,
  },
  cardType: {
    type: String,
    enum: ["REGULAR", "SPECIAL"],
  },
  customerName: {
    type: String,
  },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE"],
    default : "ACTIVE"
  },
  vision: {
    type: String,
    required: true,
  },
  customerID: {
    type: String,
    required: true,
    ref: "Customer",
  },
});

module.exports = mongoose.model("Card", cardSchema);
