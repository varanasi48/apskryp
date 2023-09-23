const mongoose = require('mongoose')

const Schema = mongoose.Schema

const InvestSchema = new Schema(
  {
    userid: String,
    plan: String,
    iid:String,
    url:String,
    doi:String,   
    status: String,
    investment:String,
    referal:String,
    payment:String,
    deduction1:String,
    d1date:String,
    d2date:String,
    deduction2:String,

    aux:{ type: Boolean, default: false },
  
  },
  {
    timestamps: true,
  },
)

const Investment = mongoose.model('invest', InvestSchema)

module.exports = Investment
