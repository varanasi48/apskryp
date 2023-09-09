const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const cors = require('cors')

const db = require('./models')

dotenv.config()
const User = db.User
const Investment = db.Investment
const Bank = db.Bank

const { Date, Math } = require("core-js");
const { Navigate } = require('react-router-dom')


const app = express()

app.use(express.json())
// Allow requests from all origins
app.use(cors())
// Connect to MongoDB
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


app.post('/login', async (req, res) => {
  console.log(JSON.stringify(req.body))
  try {
    const user = await User.findOne({$or:[{userid:req.body.phoneno },{phoneno: req.body.phoneno }]})
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(400).send('Invalid credentials')
    }
    console.log(res.user)
    const token = jwt.sign(
      { usertype: user.usertype, phoneno: user.phoneno, id: user._id, userid: user.userid,plan:user.plan  },
      process.env.JWT_SECRET,
      { expiresIn: '30m' },
    )
    res.json({ name: user.name, phoneno: user.phoneno, usertype: user.usertype, token, userid: user.userid,plan:user.plan,investment:user.investment,id:user._id})
  } catch (err) {
    res.status(500).send('Server error')
  }
})

app.get('/refreshToken', (req, res) => {
  try {
    // Decode the old token (without verifying its expiration)
    const oldToken = req.headers.authorization.split(' ')[1]
    const decoded = jwt.decode(oldToken)

    // Generate a new token with the same payload
    const newToken = jwt.sign(decoded, process.env.JWT_SECRET, { expiresIn: '30m' })

    res.json({ token: newToken })
  } catch (err) {
    res.status(500).send('Invalid token')
  }
})

app.post('/register', async (req, res) => {
  console.log(req.body)
  try {
    let token = req.headers.authorization.split(' ')[1]
    if (token.endsWith('}')) {
      token = token.slice(0, -1)
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if (!['branch_manager', 'admin'].includes(decoded.usertype)) {
      return res.status(403).send('Permission denied')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    
   
      const newUser = new User({
        userid:req.body.userid,
        name: req.body.name,
        phoneno: req.body.phoneno,
        email: req.body.email,
        password: hashedPassword,
        usertype: req.body.usertype,
        plan:req.body.plan,
        investment:req.body.investment,
      
        nominee: req.body.nominee,
      
        status: req.body.status,
  
        registeredBy: decoded.id,
      })
      
    
    
   

    await newUser.save()
    res.status(201).send('User registered successfully.')
    
    
  } catch (err) {
    if (err.name === 'TokenExpiredError' || err.name === 'JsonWebTokenError') {
      return res.status(401).send('Invalid token')
    }

    if (err?.code === 11000) {
      // MongoDB unique constraint error
      if (err?.keyPattern && err?.keyPattern?.email) {
        return res.status(400).send('Email already exists')
      }
      if (err?.keyPattern && err?.keyPattern?.phoneno) {
        return res.status(400).send('Phone number already exists')
      }

    }
	
	
    res.status(500).send('Server error')
  }
})

app.post('/invest', async (req, res) => {
  console.log(req.body)
  try {
    let token = req.headers.authorization.split(' ')[1]
    if (token.endsWith('}')) {
      token = token.slice(0, -1)
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

   

    const salt = await bcrypt.genSalt(10)
   
   
      const invest = new Investment({
        userid:req.body.userid,
       
        plan:req.body.plan,
        investment:req.body.investment,
        status: req.body.status,
        referal:req.body.ref
        
      })
    
    await invest.save()
    res.status(201).send('Plan registered successfully.')
    
    
  } catch (err) {
    if (err.name === 'TokenExpiredError' || err.name === 'JsonWebTokenError') {
      return res.status(401).send('Invalid token')
    }

	
	
    res.status(500).send('Server error')
  }
})


app.post('/bank', async (req, res) => {
  console.log(req.body)
  try {
    let token = req.headers.authorization.split(' ')[1]
    if (token.endsWith('}')) {
      token = token.slice(0, -1)
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

   

    const salt = await bcrypt.genSalt(10)
   
   
      const bank = new Bank({
        userid:req.body.userid,
       
        bank:req.body.bank,
        ifsc:req.body.ifsc,
        status: req.body.status,
        account:req.body.account
        
      })
    
    await bank.save()
    res.status(201).send('Plan registered successfully.')
    
    
  } catch (err) {
    if (err.name === 'TokenExpiredError' || err.name === 'JsonWebTokenError') {
      return res.status(401).send('Invalid token')
    }

	
	
    res.status(500).send('Server error')
  }
})



app.get('/users', async (req, res) => {
 
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // Extracting query parameters
    const count = parseInt(req.query.count) || 10
    const start = parseInt(req.query.start) || 0
    const sortField = req.query.sort || 'createdAt'
    const registeredBy = req.query.registeredBy

    // Constructing the query
    let query = User.find()

    // Filtering by registeredBy if provided
    if (registeredBy) {
      query = query.where('registeredBy').equals(registeredBy)
    }

    // Applying start, count (limit) and sort to the query
    query = query.skip(start).limit(count).sort(sortField)

    // Executing the query
    const users = await query.exec()

    res.status(200).json(users)
  } catch (error) {
    if (error.name === 'TokenExpiredError' || error.name === 'JsonWebTokenError') {
      return res.status(401).send('Invalid token')
    }
    console.error('Error retrieving users:', error)
    res.status(500).send('Internal Server Error.')
  }
})

app.post('/fetch-users', async (req, res) => {
  try {
    let token = req.headers.authorization.split(' ')[1]
    if (token.endsWith('}')) {
      token = token.slice(0, -1)
    }
	
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const count = parseInt(req.query.count) || 10
    const start = parseInt(req.query.start) || 0
    //let filterConditions = req.body || {}

   /* switch (decoded.usertype) {
      case 'admin':
        filterConditions.usertype = { $ne: 'admin' }
        break
      case 'branch_manager':
        filterConditions.registeredBy = decoded.id
        break
      default:
        return res.status(401).send('Unauthorized user type.')
    }*/

    const users = await User.find().skip(start)

    res.status(200).json(users)
  } catch (error) {
    if (error.name === 'TokenExpiredError' || error.name === 'JsonWebTokenError') {
      return res.status(401).send('Invalid token')
    }
    console.error('Error fetching users:', error)
    res.status(500).send('Internal Server Error.')
  }
})

app.post('/fetch-investment', async (req, res) => {
  try {
    let token = req.headers.authorization.split(' ')[1]
    if (token.endsWith('}')) {
      token = token.slice(0, -1)
    }
	
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const count = parseInt(req.query.count) || 10
    const start = parseInt(req.query.start) || 0
    //let filterConditions = req.body || {}

   /* switch (decoded.usertype) {
      case 'admin':
        filterConditions.usertype = { $ne: 'admin' }
        break
      case 'branch_manager':
        filterConditions.registeredBy = decoded.id
        break
      default:
        return res.status(401).send('Unauthorized user type.')
    }*/

    const invest = await Investment.find().skip(start)

    res.status(200).json(invest)
  } catch (error) {
    if (error.name === 'TokenExpiredError' || error.name === 'JsonWebTokenError') {
      return res.status(401).send('Invalid token')
    }
    console.error('Error fetching users:', error)
    res.status(500).send('Internal Server Error.')
  }
})

app.post('/updateOne', async (req, res) => {
  console.log(req.body)
  try {
    let token = req.headers.authorization.split(' ')[1]
    if (token.endsWith('}')) {
      token = token.slice(0, -1)
    }
	
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const count = parseInt(req.query.count) || 10
    const start = parseInt(req.query.start) || 0
        
    const updateOne = await Investment.findByIdAndUpdate(req.body.id,{status:req.body.status})
    updateOne.save()

    res.status(200).json(updateOne)
  } catch (error) {
    if (error.name === 'TokenExpiredError' || error.name === 'JsonWebTokenError') {
      return res.status(401).send('Invalid token')
    }
    console.error('Error fetching users:', error)
    res.status(500).send('Internal Server Error.')
  }
})

app.post('/updateTwo', async (req, res) => {
  console.log(req.body)
  try {
    let token = req.headers.authorization.split(' ')[1]
    if (token.endsWith('}')) {
      token = token.slice(0, -1)
    }
	
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const count = parseInt(req.query.count) || 10
    const start = parseInt(req.query.start) || 0
        
    const updatetwo = await User.findByIdAndUpdate(req.body.id,{status:req.body.status},{new:true})
    updatetwo.save()

    res.status(200).json(updatetwo)
  } catch (error) {
    if (error.name === 'TokenExpiredError' || error.name === 'JsonWebTokenError') {
      return res.status(401).send('Invalid token')
    }
    console.error('Error fetching users:', error)
    res.status(500).send('Internal Server Error.')
  }
})


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server started on : ${PORT}`)
})
