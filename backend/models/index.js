const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}

db.mongoose = mongoose

db.User = require('./user.model')
db.Investment = require('./investment')
db.Bank = require('./bankdetails')
db.offers = require('./offers')

db.ROLES = ['investor', 'branch_manager', 'admin']

module.exports = db
