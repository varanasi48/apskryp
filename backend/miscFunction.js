const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const db = require('./models')

dotenv.config()
const User = db.User

const app = express()

app.use(express.json())

// Connect to MongoDB
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


app.get('/firstAdmin', async (req, res) => {
	async function insertFirstAdmin() {
		try {
			// Check if there's already an admin user
			const existingAdmin = await User.findOne({ usertype: 'admin' });
	
			if (existingAdmin) {
				console.log('Admin user already exists.');
				return;
			}
	
			// Create a default password for the admin
			const hashedPassword = await bcrypt.hash('admin', 10);
	
			const adminUser = new User({
				name: 'Admin User',
				phoneno: '1234567890',
				email: 'admin@example.com',
				password: hashedPassword,
				usertype: 'admin'
			});
	
			await adminUser.save();
	
			console.log('Admin user created successfully.');
		} catch (error) {
			console.error('Error creating admin user:', error);
		}
	}
	
	// Execute the function
	insertFirstAdmin().then(() => {

		res.status(201).send('User registered successfully')
	});
		
})

app.post('/delete-user', async (req, res) => {
    try {
        const filterConditions = req.body;

        // Deleting user(s) based on filter conditions
        const result = await User.deleteMany(filterConditions);

        if (result.deletedCount === 0) {
            res.status(404).send('No users found matching the provided criteria.');
        } else {
            res.status(200).send(`${result.deletedCount} user(s) deleted successfully.`);
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('Internal Server Error.');
    }
});

app.post('/find-users', async (req, res) => {
    try {
        // Extracting filter conditions, count, and start from the request body
        const { count = 10, start = 0, ...filterConditions } = req.body;

        // Constructing the query
        let query = User.find(filterConditions).skip(start).limit(count).sort('createdAt');

        // Executing the query
        const users = await query.exec();

        res.status(200).json(users);
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).send('Internal Server Error.');
    }
});



const PORT = 9876

app.listen(PORT, () => {
  console.log(`Server started on : ${PORT}`)
})
