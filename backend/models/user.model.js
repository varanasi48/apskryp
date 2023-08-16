const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    name: String,
    phoneno: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
    nominee: String,
	status: { type: Boolean, default: false },
    usertype: {
      type: String,
      enum: ['investor', 'branch_manager', 'admin'],
      required: true,
    },
    registeredBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
  },
  {
    timestamps: true,
  },
)

const User = mongoose.model('User', UserSchema)

module.exports = User
