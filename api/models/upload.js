var mongoose = require('mongoose')

const khungIMG = new mongoose.Schema(
  {
    img: {
      type: String,
      required: true
    }
  },
)

module.exports = mongoose.model('img', khungIMG)
