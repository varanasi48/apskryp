const dbConnect = require('./backend/database')

dbConnect()
// login endpoint
app.post('/login', (request, response) => {
  // check if email exists
  User.findOne({ email: request.body.email })

    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {
          // check if password matches
          if (!passwordCheck) {
            return response.status(400).send({
              message: 'Passwords does not match',
              error,
            })
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            'RANDOM-TOKEN',
            { expiresIn: '24h' },
          )

          //   return success response
          response.status(200).send({
            message: 'Login Successful',
            email: user.email,
            token,
          })
        })
        // catch error if password does not match
        .catch((error) => {
          response.status(400).send({
            message: 'Passwords does not match',
            error,
          })
        })
    })
    // catch error if email does not exist
    .catch((e) => {
      response.status(404).send({
        message: 'Email not found',
        e,
      })
    })
})

// register function into mongodb
app.post('/register', (request, response) => {
  // hash the password
  bcrypt
    .hash(request.body.password, 10)
    .then((hash) => {
      // create new user
      const user = new User({
        email: request.body.email,
        mobile: request.body.mobile,
        name: request.body.name,
		type: request.body.type,
        password: hash,
      })

      // save the user into mongodb
      user
        .save()
        .then(() => {
          response.status(201).send({
            message: 'User created successfully',
          })
        })
        // catch error if user already exists
        .catch((error) => {
          response.status(409).send({
            message: 'User already exists',
            error,
          })
        })
    })
    // catch error if password is not hashed
    .catch((error) => {
      response.status(500).send({
        message: 'Password not hashed',
        error,
      })
    })
})
