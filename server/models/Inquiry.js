const mongoose = require('mongoose')

const inquirySchema = new mongoose.Schema({
  fullName: String,
  email: String,
  category: String,
  message: String
})

module.exports = mongoose.model('Inquiry', inquirySchema)
