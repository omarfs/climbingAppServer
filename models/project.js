const mongoose = require('mongoose')

const { Schema } = mongoose

const projectSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  route: {
    type: Schema.Types.ObjectId,
    ref: 'Route'
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  sended: {
    type: Boolean,
    default: false
  },
  sendedAt: [Date],
  attempts: {
    type: Number,
    default: 0
  },
  projectingTime: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('Project', projectSchema)
