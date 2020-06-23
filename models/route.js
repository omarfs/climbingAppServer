const mongoose = require('mongoose')

const { Schema } = mongoose

const routeSchema = new Schema({
  routeId: {
    type: String,
    required: true
  },
  grade: {
    type: Number,
    required: true
  },
  color: {
    type: Number,
    required: true
  },
  holdType: String,
  style: String,
  notes: String,
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  location: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Route', routeSchema)
