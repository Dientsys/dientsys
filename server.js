const express = require('express') // Import express
const mongoose = require('mongoose') // Import mongoose
require('dotenv').config() // Import dotenv: to use .env file

// Create express instance
const app = express()

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to MongoDB'))


// Enable express to parse body
app.use(express.json())

// Import routes
const departmentsRouter = require('./routes/departments')
app.use('/departments', departmentsRouter) // Use departmentsRouter for all routes starting with /departments


// Listen on port 3000
app.listen(3000, () => console.log('Server running...'))