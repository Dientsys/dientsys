const express = require('express') // Import express
const mongoose = require('mongoose') // Import mongoose
require('dotenv').config() // Import dotenv: to use .env file

// Create express instance
const app = express()

// Enable express to parse body
app.use(express.json())

// Listen on port 8000
app.listen(process.env.PORT, () => console.log('Server running...'))

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to MongoDB'))

// Import routes
app.use('/api/departments', require('./routes/departments')) // Use departmentsRouter for all routes starting with /departments
