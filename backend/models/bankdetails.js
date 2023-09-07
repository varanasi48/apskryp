const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BankSchema = new Schema(
  {
    userid: String,
    account: String,
   
    status: { type: Boolean, default: false },
   
    ifsc:String,
    bank:String,
    
   //plan:String,

    /*registeredBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },*/
  },
  {
    timestamps: true,
  },
)

const Bank = mongoose.model('bank', BankSchema)

module.exports = Bank
