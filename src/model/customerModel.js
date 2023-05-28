const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim : true
  },
  lastName: {
    type: String,
    required: true,
    trim : true
  },
  mobileNumber: {
    type: String,
    required: true,
    minLength: [10,"number should contain atleast 10 digits"],
    trim: true,
    unique: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  emailID: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  customerId: {
    type: String,
    required: true,
    trim : true
  },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE"],
  },
});

module.exports = mongoose.model("Customer", customerSchema);
