const mongoose = require('mongoose')

const Schema = mongoose.Schema

const OffersSchema = new Schema(
  {
    
    amount:String,
    userid:{ type : Array , "default" : [] },
    name:String,
    valid:{ type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
)

const Offer = mongoose.model('invest', OffersSchema)

module.exports = Offer
