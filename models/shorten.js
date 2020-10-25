const mongoose = require('mongoose')

const Schema = mongoose.Schema
const shortenSchema = new Schema({
  fullUrl: {
    type: String,
    required: true
  },
  shortId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Shorten', shortenSchema)